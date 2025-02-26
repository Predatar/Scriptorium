import { SvgContainer } from '@Components/Containers';
import type { TButtonColor, TButtonSize, TButtonType } from '@Types/button';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
	children: ReactNode;
	size: TButtonSize;
	type: TButtonType;
}

const size: Record<TButtonSize, number> = {
	large: 48,
	medium: 40,
	small: 32,
};

const borderRadius: Record<TButtonSize, number> = {
	large: 12,
	medium: 10,
	small: 8,
};

const svgSize: Record<TButtonSize, number> = {
	large: 24,
	medium: 20,
	small: 16,
};

const buttonTypes: Record<TButtonType, TButtonColor> = {
	primary: {
		iconColor: 'var(--day-blue-900)',
		bg: 'var(--stem-green-500)',
		bgHover: 'var(--stem-green-400)',
		bgActive: 'var(--stem-green-300)',
	},
	secondary: {
		iconColor: 'var(--stem-green-500)',
		iconColorHover: 'var(--stem-green-400)',
		iconColorActive: 'var(--stem-green-300)',
		bg: 'var(--noble-black-700)',
		bd: 'var(--stem-green-500)',
		bdHover: 'var(--stem-green-400)',
		bdActive: 'var(--stem-green-300)',
	},
	tertiary: {
		iconColor: 'var(--noble-black-200)',
		iconColorHover: 'var(--noble-black-300)',
		iconColorActive: 'var(--noble-black-200)',
		bg: 'var(--noble-black-600)',
		bgHover: 'var(--noble-black-500)',
		bgActive: 'var(--noble-black-400)',
	},
	ghost: {
		bg: 'transparent',
		iconColor: 'var(--noble-black-400)',
		iconColorHover: 'var(--noble-black-300)',
		iconColorActive: 'var(--noble-black-200)',
	},
	glass: {
		bg: 'linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.16) 100%);',
		iconColor: 'var(--noble-black-200)',
		iconColorHover: 'var(--noble-black-100)',
		iconColorActive: 'var(--white)',
	},
};

const ButtonStyle = styled.button<{ $size: TButtonSize; $type: TButtonType }>`
	padding: 0;
	width: ${({ $size }) => size[$size] + 'px'};
	aspect-ratio: 1/1;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ $type }) =>
		buttonTypes[$type].bg &&
		css`
			background: ${buttonTypes[$type].bg};
		`}

	${({ $type }) =>
		$type === 'secondary'
			? css`
					border-width: 3px !important;
					border-style: solid;
			  `
			: css`
					border: none;
			  `}

	border-radius: ${({ $size }) => borderRadius[$size] + 'px'};

	${({ $type }) =>
		buttonTypes[$type].bd &&
		css`
			border-color: ${buttonTypes[$type].bd};
		`}

	${({ $type }) =>
		buttonTypes[$type].iconColor &&
		css`
			color: ${buttonTypes[$type].iconColor};
		`}

	${({ $type }) => 
		$type === 'glass' &&
			css`
				box-shadow: inset 0 8px 12px 0 var(--glass-stroke), 0 24px 24px -16px rgba(0, 0, 0, 0.12),
					inset 16px 24px 64px -24px var(--glass-stroke);
			`
	}

	cursor: pointer;
	transition: background var(--transition-duration), border-color var(--transition-duration),
		color var(--transition-duration);

	&:hover {
		${({ $type }) =>
			buttonTypes[$type].bgHover &&
			css`
				background: ${buttonTypes[$type].bgHover};
			`}

		${({ $type }) =>
			buttonTypes[$type].bdHover &&
			css`
				border-color: ${buttonTypes[$type].bdHover};
			`}

		${({ $type }) =>
			buttonTypes[$type].iconColorHover &&
			css`
				color: ${buttonTypes[$type].iconColorHover};
			`}
	}

	&:active {
		${({ $type }) =>
			buttonTypes[$type].bgActive &&
			css`
				background: ${buttonTypes[$type].bgActive};
			`}

		${({ $type }) =>
			buttonTypes[$type].bdActive &&
			css`
				border-color: ${buttonTypes[$type].bdActive};
			`}

		${({ $type }) =>
			buttonTypes[$type].iconColorActive &&
			css`
				color: ${buttonTypes[$type].iconColorActive};
			`}
	}
`;

const ButtonIcon: FC<PropsType> = ({ children, size = 'large', type = 'primary' }) => {
	return (
		<ButtonStyle $size={size} $type={type}>
			<SvgContainer size={svgSize[size]}>{children}</SvgContainer>
		</ButtonStyle>
	);
};

export default ButtonIcon;
