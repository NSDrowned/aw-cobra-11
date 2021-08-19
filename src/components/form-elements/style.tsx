import styled, { css } from 'styled-components';
import { ThemeType } from '@/def/TTheme';

const FormElement = styled.div<{ active: boolean, cue: boolean, error: boolean, city?: string }>`
	padding: 0 1px;
	margin-bottom: ${props => props.city !== undefined ? '33px' : '15px'};
	${props => props.error && props.city !== undefined && css`
		margin-bottom: 15px;
	`}
	&:before {
		content: '';
		width: 100%;
		height: ${props => props.active ? '55px' : '45px'};
		border-radius: 6px;
		background: ${props => props.theme.background.input.default};
		${props => !props.cue && !props.error && css`
			border: 1px solid ${props => props.theme.input.border.default};
		`}
		${props => props.cue && css`
			border: 1px solid ${props => props.theme.input.border.focus};
		`}
		${props => props.error && css`
			border: 1px solid ${props => props.theme.input.border.error};
		`}
		position: absolute;
		top: 4px;
		left: 0;
		box-sizing: border-box;
		transform: ${props => props.active ? 'translateY( -5px )' : 'none'};
		transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	}
`;

const FormElementArrow = styled.span<{ focus: boolean }>`
	position: absolute;
	top: 26px;
	right: 15px;
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid ${props => props.focus ? props.theme.input.arrow.focus : props.theme.input.arrow.default};
	transform: ${props => props.focus ? 'rotate( -180deg )' : 'none'};
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
`;

const FormElementLabel = styled.label<{ active: boolean, icon?: boolean, select?: boolean }>`
	pointer-events: none;
	cursor: text;
	font-size: 14px;
	line-height: 18px;
	color: ${props => props.theme.colors.label};
	position: absolute;
	top: 17px;
	left: ${props => props.icon ? '35px' : '18px'};
	transform-origin: left;
	backface-visibility: hidden;
	transform: ${props => props.active ? 'translateY(-10px) scale(.8) perspective(1px) translateZ(0)' : 'none'};
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	${props => props.active && props.icon && css`
		transform: translateX( -17px ) translateY(-10px) scale(.8) perspective(1px) translateZ(0);
	`}
	${props => props.select && css`
		opacity: ${props.active ? '1' : '0'};
	`}
`;

const FormElementIcon = styled.svg<{ active: boolean }>`
	pointer-events: none;
	position: absolute;
	top: 21px;
	left: 18px;
	width: 12px;
	height: 12px;
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	transform: ${props => props.active ? 'translateY( 7px )' : 'none'};
`;

const FormElementSuccess = styled.svg<{ success: boolean }>`
	position: absolute;
	top: 50%;
	right: 12px;
	margin-top: -7px;
	width: 15px;
	height: 15px;
	pointer-events: none;
	fill: #08CD5C;
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	opacity: ${props => props.success ? '1' : '0'};
	transform: ${props => props.success ? 'scale( 1 )' : 'scale( .5 )'};
`;

const FormElementMessage = styled.span`
	font-size: 12px;
	line-height: 16px;
	color: #E31818;
`;

const Element = styled.input<{ icon?: boolean, as?: string, active?: boolean }>`
	outline: none;
	border: 0;
	background: transparent;
	width: 100%;
	height: 53px;
	border-radius: 6px;
	padding: 17px 40px 0 18px;
	${props => props.icon === undefined && props.as === 'select' && css`
		padding: ${props.active ? '17px 40px 0 18px' : '0 40px 0 18px'};
	`}
	${props => props.icon && css`
		padding: 17px 40px 0 35px;
	`}
	color: ${props => props.theme.colors.input};
	font-size: ${props => props.active ? '16px' : '14px'};
	transition: all cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	option {
		font-size: 16px;
	}
	&:-webkit-autofill {
		box-shadow: 0 0 0 53px white inset;
    -webkit-text-fill-color: ${props => props.theme.colors.input};
	}
	&:-webkit-autofill:focus {
		box-shadow: 0 0 0 53px white inset;
		-webkit-text-fill-color: ${props => props.theme.colors.input};
	} 
`;

const City = styled.span<{ theme: ThemeType, active: boolean, error?: boolean }>`
	position: absolute;
	${props => props.error && css`
		bottom: 3px;
	`}
	${props => !props.error && css`
		bottom: -15px;
	`}
	/* bottom: ${props => props.error && props.active ? '0px' : '-14px'}; */
	right: 0;
	color: ${props => props.theme.colors.text};
	font-size: 12px;
	transition: transform cubic-bezier( .68, -.55, .265, 1.55 ) .3s;
	${props => props.active && css`
		transform: translateY( 5px );
	`}
`;

export {
	FormElement,
	FormElementArrow,
	FormElementLabel,
	FormElementIcon,
	FormElementSuccess,
	FormElementMessage,
	Element,
	City
}