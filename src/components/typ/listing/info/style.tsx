// Packages
import styled, { keyframes } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TThemeTyp';

const arrowBig = keyframes`
	0% {opacity: 0;transform: translateX(-20px)}
	25%,65% {opacity: 1}
	100% {opacity: 0;transform: translateX(0)}
`;
const arrowSmall = keyframes`
	0% {opacity: 0;transform: translateX(-20px) scale(.8)}
	5% {transform: translateX(-20px) scale(.8)}
	65% {opacity: 1}
	100% {opacity: 0;transform: translateX(0) scale(.8)}
`;

const ListingInfoWrapper = styled.a`
	text-decoration: none;
	display: block;
	word-break: break-word;
	@media screen and ( min-width: 768px ) {
		min-height: 188px;
	}
`;
const InfoTitle = styled.span<{ theme: ThemeType}>`
	color: ${props => props.theme.colors.listing.title};
    font-size: 21px;
    font-weight: 700;
    line-height: 24px;
    margin: 10px 0;
	display: block;
	@media screen and ( min-width: 768px ) {
		font-size: 21px;
		line-height: 24px;
		margin: 20px 0;
	}
`;
const InfoText = styled.span`
	color: ${props => props.theme.colors.listing.text};
    font-size: 12px;
    line-height: 14px;
	display: block;
	@media screen and ( min-width: 768px ) {
		font-size: 16px;
		line-height: 18px;
	}
`;
const InfoLink = styled.span`
	color: ${props => props.theme.colors.listing.link};
    font-size: 12px;
    line-height: 14px;
    margin-top: 5px;
	display: block;
	@media screen and ( min-width: 768px ) {
		font-size: 16px;
		line-height: 18px;
		margin-top: 10px;
	}
`;
const InfoBtn = styled.span`
	border-radius: 5px;
    background-color: ${props => props.theme.background.listing.button.default};
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.3);
    margin-top: 10px;
    height: 50px;
    padding: 10px;
    line-height: 30px;
    text-align: center;
	display: flex;
    align-items: center;
    justify-content: center;
	transition: all ease .3s;
	&:hover {
		background-color: ${props => props.theme.background.listing.button.hover};
	}
	@media screen and ( min-width: 768px ) {
		max-width: 330px;
		margin: 15px 0 0;
	}
`;
const InfoBtnText = styled.span`
	color: ${props => props.theme.colors.listing.button};
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    text-shadow: 0 1px 1px rgba(0,0,0,.5);
	display: block;
`;
const InfoBtnArrow = styled.span`
	width: 28px;
    height: 22px;
    margin-left: 18px;
    padding-left: 10px;
	margin-top: 2px;
    display: flex;
    align-items: center;
	&:before {
		content: '';
		width: 8px;
		height: 14px;
		background: url("/arrow.png") center/8px 14px no-repeat;
		display: block;
		opacity: .5;
		animation: 1s infinite ${arrowSmall};
	}
	&:after {
		content: '';
		width: 12px;
		height: 22px;
		background: url("/arrow.png") center/12px 22px no-repeat;
		display: block;
		margin: 0 0 0 -2px;
		opacity: 1;
		animation: 1s infinite ${arrowBig};
	}
	
`; 

export {
	ListingInfoWrapper, InfoTitle, InfoText, InfoLink, InfoBtn, InfoBtnText, InfoBtnArrow
};