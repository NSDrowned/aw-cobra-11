// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const StepWrapper = styled.div<{ theme: ThemeType}>`
	background: ${props => props.theme.background.steps};
	color: ${props => props.theme.colors.steps};
	border-radius: 4px;
	height: 28px;
	width: 86px;
	line-height: ${props => props.theme.font.lineHeight.steps};
	font-size: ${props => props.theme.font.size.steps};
	text-align: center;
	font-weight: ${props => props.theme.font.weight.steps};
	padding: 6px;
	margin-bottom: 5px;
	@media screen and ( min-width: 768px ) {
		margin-bottom: 15px;
	}

`;

export {
	StepWrapper
};