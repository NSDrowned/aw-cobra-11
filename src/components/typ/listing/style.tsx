// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TThemeTyp';

const ListingWrapper = styled.div`
	margin: 0 0 10px;
`;
const ListingContent = styled.div<{ theme: ThemeType}>`
	border-top: 1px solid ${props => props.theme.background.listing.border};
    background-color: ${props => props.theme.background.listing.default};
    display: block;
    text-decoration: none;
	@media screen and ( min-width: 768px ) {
		padding: 40px 30px;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 80%;
			background: url(${props => props.theme.background.listing.imageWebp}) right 70% no-repeat;
		}
	}
	@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
		&:before {
			background: url(${props => props.theme.background.listing.imageJpg}) right 70% no-repeat;
		}
	}
	@media screen and ( min-width: 1024px ) {
		padding: 70px 30px;
		&:before {
			width: 60%;
		}
	}
	@media screen and ( min-width: 1900px ) {
		&:before {
			background-position-x: left;
		}
	}
`;
const ListingRow = styled.div`
	@media screen and ( min-width: 768px ) {
		display: flex;
		justify-content: center;
		max-width: 1200px;
		margin: auto;
	}
`;
const ListingColImg = styled.div`
	padding: 5px 20px;
    width: 100%;
    display: block;
    background: url(${props => props.theme.background.listing.imageWebp}) center/cover no-repeat;
	@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
		&:before {
			background: url(${props => props.theme.background.listing.imageJpg}) center/cover no-repeat;
		}
	}
	@media screen and ( min-width: 768px ) {
		background: 0 0;
		width: auto;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 50%;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
		padding: 5px 20px 5px 30px;
	}
	@media screen and ( min-width: 1024px ) {
		padding: 0 60px 0 20px;
	}
`;
const ListingImg = styled.img`
	width: 198px;
    height: auto;
    margin: 0 0 0 auto;
    display: block;
	@media screen and ( min-width: 768px ) {
		width: 300px;
	}
	@media screen and ( min-width: 1024px ) {
		width: 430px;
	}
`;
const ListingColInfo = styled.div`
	background-color: ${props => props.theme.background.listing.default};
    display: block;
    padding: 20px;
	@media screen and ( min-width: 768px ) {
		background: 0 0;
		padding: 0 0 0 10px;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 50%;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
	}
	@media screen and ( min-width: 1024px ) {
		padding: 0 20px 0 40px;
	}
`;
const ListingTitle = styled.p`
	font-size: 36px;
    font-weight: 700;
    line-height: 42px;
    color: #fff;
    display: block;
	margin: 0;
	span {
		span {
			color: ${props => props.theme.background.listing.border};
			margin-left:2px;
		}
	}
	@media screen and ( min-width: 768px ) {
		font-size: 35px;
		line-height: 35px;
		max-width: 400px;
		span {
			display: block;
			margin-top: 7px;
			span {
				display: inline-block;
				vertical-align: middle;
				margin-top: 0;
			}
		}
	}
	@media screen and ( min-width: 1024px ) {
		font-size: 48px;
		line-height: 55px;
	}
`;
const ListingFooter = styled.div`
	line-height: 19px;
    margin: 0;
    padding: 7px 0;
    text-align: center;
    border-top: 0;
    display: block;
`;
const ListingFooterLink = styled.a`
	color: #4d4d4d;
    text-decoration: none;
    font-size: 12px;
	span {
		background: url("/aw-logo.png") no-repeat;
		display: inline-block;
		height: 10px;
		margin-left: 5px;
		overflow: hidden;
		text-indent: -999px;
		width: 70px;
	}
`;

export {
	ListingWrapper, ListingContent, ListingRow, ListingColImg, ListingImg, ListingColInfo, ListingTitle, ListingFooter, ListingFooterLink
};