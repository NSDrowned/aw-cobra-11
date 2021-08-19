// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TThemeTyp';

const HeaderWrapper = styled.header<{ theme: ThemeType}>`
	height: ${props => props.theme.header.height.xs};
    width: 100%;
    background-color: ${props => props.theme.background.header.default};
	& div {
		height: ${props => props.theme.header.height.xs};
		display: flex;
		align-items: center;
	}
	@media screen and ( min-width: 768px ) {
		height: ${props => props.theme.header.height.md};
		& div {
			height: ${props => props.theme.header.height.md};
		}
	}
`;

const HeaderImg = styled.svg<{ theme: ThemeType}>`
	width: ${props => props.theme.logo.width.xs};
    height: ${props => props.theme.logo.height.xs};
    margin: ${props => props.theme.logo.margin.xs};
	@media screen and ( min-width: 768px ) {
		margin: ${props => props.theme.logo.margin.md};
	}
`;

export {
	HeaderWrapper, HeaderImg
};