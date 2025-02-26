import type { TFontSize, TFontStyle, TFontWeight } from '@Types/typography';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
	children: ReactNode;
	weight?: TFontWeight;
	size: Exclude<TFontSize, 'extraSmall'>;
}

const fontWeights: Record<TFontWeight, string> = {
	bold: 'var(--font-weight-700)',
	semiBold: 'var(--font-weight-600)',
	medium: 'var(--font-weight-500)',
};

const fontSizes: Record<Exclude<TFontSize, 'extraSmall'>, TFontStyle> = {
	extraLarge: { size: '18px', lineHeight: '1.56' },
	large: { size: '16px', lineHeight: '1.5' },
	medium: { size: '14px', lineHeight: '1.43' },
	small: { size: '12px', lineHeight: '1.5' },
};

const BodyStyle = styled.p<{ $weight?: TFontWeight; $size: Exclude<TFontSize, 'extraSmall'> }>`
	${({ $weight }) =>
		$weight &&
		css`
			font-weight: ${fontWeights[$weight]};
		`}
	font-size: ${({ $size }) => fontSizes[$size].size};
	line-height: ${({ $size }) => fontSizes[$size].lineHeight};
	letter-spacing: 0.15px;
`;

const Body: FC<PropsType> = ({ children, size, weight }) => (
	<BodyStyle $weight={weight} $size={size}>
		{children}
	</BodyStyle>
);

export default Body;
