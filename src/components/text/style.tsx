// Packages
import styled, { css } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const TextWrapper = styled.p<{ theme: ThemeType, center?: boolean }>`
	color: #4D4D4D;
	font-size: ${props => props.theme.font.size.default};
	line-height: ${props => props.theme.font.lineHeight.default};
	margin: 0;
	${props => props.center && css`
		text-align: center;
	`}
`;

export {
	TextWrapper
}