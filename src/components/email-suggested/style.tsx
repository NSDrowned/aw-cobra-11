// Packages
import styled from 'styled-components';

const EmailSuggestedAnimation = styled.div`
	z-index: 20;
	&.email-suggested-enter {
		opacity: 0;
		transform: translateY( 20px ) scale( .7 );
	}
	&.email-suggested-enter-active {
		opacity: 1;
		transform: translateY( 0 ) scale( 1 );
		transition: all ease .3s;
	}
	&.email-suggested-exit-active {
		opacity: 0;
		transform: translateY( 20px ) scale( .7 );
		transition: all ease .3s;
	}
`;

const EmailSuggestedWrapper = styled.div`
	position: absolute;
	width: 100%;
	margin-top: -46px;
	background-color: #2566B4;
	border-radius: 6px;
	padding: 8px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:before {
		content: '';
		position: absolute;
		bottom: -5px;
		margin-left: -6px;
		left: 50%;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid #2566b4;
	}
`;

const EmailSuggestedText = styled.p`
	margin: 0;
	color: #FFF;
	font-size: 14px;
	line-height: 18px;
`;

const EmailSuggestedActions = styled.div`
	display: flex;
`;

const EmailSuggestedButton = styled.button`
	cursor: pointer;
	border: 0;
	padding: 0;
	outline: none;
	width: 20px;
	height: 20px;
	border-radius: 3px;
	background-color: rgba( 255, 255, 255, .2 );
	&:first-child {
		margin-right: 8px;
	}
`;

const EmailSuggestedIcon = styled.svg`
	pointer-events: none;
	fill: #FFF;
	display: block;
	margin: 0 auto;
	width: 10px;
	height: 10px;
`;

export {
	EmailSuggestedAnimation,
	EmailSuggestedWrapper,
	EmailSuggestedText,
	EmailSuggestedActions,
	EmailSuggestedButton,
	EmailSuggestedIcon
};