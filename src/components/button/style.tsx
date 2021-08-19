// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const ButtonWrapper = styled.button<{ theme: ThemeType}>`
	outline: 0;
	height: 50px;
	width: 100%;
	border: 1px solid ${props => props.theme.button.border};
	border-radius: 6px;
	background: ${props => props.theme.background.button.default};
	box-shadow: ${props => props.theme.button.shadow.default};
	text-align: center;
	transition: all 300ms ease;
	cursor: pointer;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: ${props => props.theme.background.button.hover};
		opacity: 0;
		border-radius: 3px;
		transition: all 300ms ease;
	}
	&:hover {
		&:before {
			opacity: 1;
		}
	}
	&:active {
		transform: translateY( 2px );
		box-shadow: ${props => props.theme.button.shadow.active};
	}
`
const ButtonSpan = styled.span<{ theme: ThemeType}>`
	color: ${props => props.theme.colors.button};
	font-size: ${props => props.theme.font.size.button.xs};
	font-weight: ${props => props.theme.font.weight.button};
	@media screen and ( min-width: 768px ) {
		font-size: ${props => props.theme.font.size.button.md};
	}
`;

export {
	ButtonWrapper,
	ButtonSpan
};