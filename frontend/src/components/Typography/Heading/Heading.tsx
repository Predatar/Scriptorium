import type { TFontSize, TFontStyle, TFontWeight } from '@Types/typography';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
	children: ReactNode;
	weight?: TFontWeight;
	size: TFontSize;
}

const fontWeights: Record<TFontWeight, string> = {
	bold: 'var(--font-weight-700)',
	semiBold: 'var(--font-weight-600)',
	medium: 'var(--font-weight-500)',
};

const fontSizes: Record<TFontSize, TFontStyle> = {
	extraLarge: { size: '36px', lineHeight: '1.22' },
	large: { size: '32px', lineHeight: '1.25' },
	medium: { size: '28px', lineHeight: '1.28' },
	small: { size: '24px', lineHeight: '1.33' },
	extraSmall: { size: '20px', lineHeight: '1.4' },
};

const HeadingStyle = styled.p<{ $weight?: TFontWeight; $size?: TFontSize }>`
	${({ $weight }) =>
		$weight &&
		css`
			font-weight: ${fontWeights[$weight]};
		`}
	font-size: ${({ $size }) => ($size ? fontSizes[$size].size : fontSizes.medium.size)};
	line-height: ${({ $size }) => ($size ? fontSizes[$size].lineHeight : fontSizes.medium.lineHeight)};
`;

const Heading: FC<PropsType> = ({ children, weight, size }) => {
	return (
		<HeadingStyle $weight={weight} $size={size}>
			{children}
		</HeadingStyle>
	);
};

export default Heading;
