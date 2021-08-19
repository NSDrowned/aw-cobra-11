// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const BoxSubTitle = styled.h4<{ theme: ThemeType}>`
	display: none;

	@media screen and ( min-width: 768px ) {
		display: block;
		font-weight: normal;
		font-size: ${props => props.theme.font.size.box.subtitle.xs};
		line-height: ${props => props.theme.font.lineHeight.box.subtitle.xs};
		color: ${props => props.theme.colors.text};
		margin: 3px 0 0;
	}

	@media screen and ( min-width: 1024px ) {
		font-size: ${props => props.theme.font.size.box.subtitle.md};
		line-height: ${props => props.theme.font.lineHeight.box.subtitle.md};
	}
`;

export {
	BoxSubTitle
};