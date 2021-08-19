// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const SubTitleWrapper = styled.h2<{ theme: ThemeType}>`
	display: none;

	@media screen and ( min-width: 768px ) {
		margin: 5px 0 42px;
		font-weight: ${props => props.theme.font.weight.subtitle};
		font-size: ${props => props.theme.font.size.subtitle.md};
		line-height: ${props => props.theme.font.lineHeight.subtitle.md};
		color: ${props => props.theme.colors.text};
		display: block;
	}

	@media screen and ( min-width: 1024px ) {
		margin: 10px 0 42px;
		font-size: ${props => props.theme.font.size.subtitle.lg};
		line-height: ${props => props.theme.font.lineHeight.subtitle.lg};
	}
`;

export {
	SubTitleWrapper
};