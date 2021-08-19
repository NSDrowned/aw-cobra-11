// Packages
import styled, { css } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const CarInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	margin: 0 0 20px;

	@media screen and ( min-width: 768px ) {
		display: block;
		background: #FFF;
		border-radius: 7px;
		box-shadow:  0 2px 5px 0 rgba( 93, 93, 93, .3 );
		margin: 0 0 25px;
	}
`;

const CarInfoImage = styled.img`
	-webkit-box-flex: 0;
	flex: 0 0 40%;
	max-width: 40%;
	margin-right: 16px;
	border-radius: 7px;

	@media screen and ( min-width: 768px ) {
		display: block;
		max-width: none;
		width: 100%;
	}
`;

const CarInfoContent = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;

	@media screen and ( min-width: 768px ) {
		padding: 15px;
		box-shadow:  0 2px 5px 0 rgba( 93, 93, 93, .3 );
	}
`;

const CarInfoText = styled.p<{ theme: ThemeType, green?: boolean }>`
	margin: 0;
	line-height: 20px;
	${props => props.green && css`
		text-decoration: line-through;
	`}
	font-size: ${props => props.green ? '16px' : '14px'};
	color: ${props => props.green ? '#6BBC00' : props.theme.colors.text};

	@media screen and ( min-width: 768px ) {
		line-height: 24px;
		${props => props.green && css`
			font-weight: bold;
		`}
		font-size: ${props => props.green ? '20px' : '16px'};
	}
`;

export {
	CarInfoWrapper,
	CarInfoImage,
	CarInfoContent,
	CarInfoText
}