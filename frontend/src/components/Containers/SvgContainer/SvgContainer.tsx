import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
	children: ReactNode;
	size: number;
	color?: string;
}

const SvgContainer: FC<PropsType> = ({ children, size, color }) => {
	const SvgContainer = styled.span<{ $size: number; $color?: string }>`
		display: block;

		width: ${props => props.$size + 'px'};
		height: ${props => props.$size + 'px'};

		flex-shrink: 0;

		${props =>
			props.$color &&
			css`
				color: ${props.$color};
			`};
	`;

	return (
		<SvgContainer $size={size} $color={color}>
			{children}
		</SvgContainer>
	);
};

export default SvgContainer;
