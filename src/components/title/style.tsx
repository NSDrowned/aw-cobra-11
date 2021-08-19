// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const MainTitle = styled.h1<{ theme: ThemeType}>`
	font-weight: bold;
	font-size: ${props => props.theme.font.size.title.xs};
	line-height: ${props => props.theme.font.lineHeight.title.xs};
	color: ${props => props.theme.colors.primary};
	color: #49494D;
	text-align: center;
	margin: 0 0 5px;

	@media screen and ( min-width: 768px ) {
		font-size: ${props => props.theme.font.size.title.md};
		line-height: ${props => props.theme.font.lineHeight.title.md};
		text-align: left;
		color: ${props => props.theme.colors.primary};
		margin: 0;
	}

	@media screen and ( min-width: 1024px ) {
		font-size: ${props => props.theme.font.size.title.lg};
		line-height: ${props => props.theme.font.lineHeight.title.lg};
	}
`;

export {
	MainTitle
};