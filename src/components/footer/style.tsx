// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const FooterWrapper = styled.footer`
	padding: 10px 0 0;
	margin: 10px 0 0;
	@media screen and ( min-width: 768px ) {
		background: #FFF;
		padding: 24px 0;
		border-top: 1px solid #D8D8D8;
		margin: 40px 0 0;
		> div {
			display: flex;
			align-items: center;
		}
	}
`;

const FooterCert = styled.div`
	display: flex;
	justify-content: center;
	font-size: 10px;
	padding-bottom: 15px;
	img {
		width: 55px !important;
    height: auto !important;
	}
	span {
		margin-top: 10px !important;
	}

	@media screen and ( min-width: 768px ) {
		padding: 0;
		margin-right: 20px;
	}
`;

const FooterContent = styled.div`
	margin: 0 -15px;
	border-top: 1px solid #D8D8D8;
	padding: 15px;
	background: #FFF;

	@media screen and ( min-width: 768px ) {
		-ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
		max-width: 100%;
		border-top: 0;
		padding: 0;
		margin: 0;
	}
`;

const FooterText = styled.p<{ theme: ThemeType }>`
	color: #565656;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	margin: 10px 0 0;
	&:not(:last-child) {
		margin: 0 0 5px;
	}

	a {
		text-decoration: none;
		color: #565656;
		&:hover {
			color: ${props => props.theme.colors.primary};
		}
	}

	@media screen and ( min-width: 768px ) {
		&:last-child {
			padding-top: 10px;
			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -150px;
				height: 1px;
				background: #9B9B9B;
				width: 300px;
			}
		}
	}
`;

export {
	FooterWrapper,
	FooterCert,
	FooterContent,
	FooterText
};