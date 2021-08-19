// Packages
import styled, { css } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const CarInfoListWrapper = styled.ul<{ theme: ThemeType, device?: string }>`
	list-style: none;
	background: #FFF;
	border-radius: 7px;
	box-shadow:  0 2px 11px 1px rgba( 0, 0, 0, .37 );
	margin: 15px 0;
	padding: 15px;
	${props => props.device === 'desktop' && css`
		display: none;
	`}

	@media screen and ( min-width: 768px ) {
		${props => props.device === 'desktop' && css`
			display: block;
		`}
		${props => props.device === 'mobile' && css`
			display: none;
		`}
		margin: 15px 0 0;
		padding: 15px 0 0;
		border-top: 1px solid #B7B9C6;
		box-shadow: none;
		border-radius: 0;
	}
`;

const CarInfoListItem = styled.li<{ theme: ThemeType }>`
	padding-left: 30px;
	&:before {
		content: '';
		position: absolute;
		top: 0px;
		left: 0px;
		background: ${props => props.theme.colors.primary};
		border-radius: 18px;
		width: 18px;
		height: 18px;
	}
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;

const CarInfoListText = styled.span<{ theme: ThemeType, blue?: boolean }>`
	display: block;
	font-size: 16px;
	line-height: 20px;
	color: ${props => props.blue ? props.theme.colors.primary : props.theme.colors.text};
	${props => props.blue && css`
		font-weight: bold;
	`}
`;

const CarInfoListIcon = styled.svg`
	position: absolute;
	left: 4px;
	top: 4px;
	width: 10px;
	height: 10px;
	fill: #FFF;
`;

export {
	CarInfoListWrapper,
	CarInfoListItem,
	CarInfoListText,
	CarInfoListIcon
}