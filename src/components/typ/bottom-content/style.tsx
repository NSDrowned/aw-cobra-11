// Packages
import styled from 'styled-components';

const BottomContentWrapper = styled.div`
	padding: 30px 0;
	@media screen and ( min-width: 768px ) {
		padding: 50px 0;
	}
`;
const BottomTitle = styled.h2`
    font-size: 25px;
    line-height: 30px;
    color: #262c33;
    text-align: center;
    font-weight: 700;
    margin: 0 0 10px;
	@media screen and ( min-width: 575px ) {
		font-size: 28px;
		line-height: 32px;
	}
	@media screen and ( min-width: 768px ) {
		font-size: 48px;
		line-height: 55px;
	}
`;
const BottomDescription = styled.p`
	font-size: 14px;
    line-height: 18px;
    color: #677484;
    text-align: center;
    margin: 0 0 10px;
	@media screen and ( min-width: 575px ) {
		font-size: 16px;
	}
	@media screen and ( min-width: 768px ) {
		font-size: 21px;
		line-height: 24px;
	}
`;
const BottomRow = styled.div`
	@media screen and ( min-width: 768px ) {
		margin: 30px auto 0;
		padding: 15px 0;
		background-color: #fff;
		-webkit-border-radius: 10px;
		border-radius: 10px;
		-webkit-box-shadow: 0 2px 10px 0 rgba(0,0,0,.3);
		box-shadow: 0 2px 10px 0 rgba(0,0,0,.3);
		display: flex;
		flex-wrap: wrap;
		max-width: 1023px;
	}
`;
const BottomCol = styled.div`
	margin-bottom: 20px;
    background-color: #fff;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
	@media screen and ( min-width: 768px ) {
		-webkit-flex: 0 0 50%;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
		background-color: transparent;
		-webkit-box-shadow: none;
		box-shadow: none;
		margin: 0;
		padding: 15px 30px;
		&:last-child {
			display: flex;
			align-items: center;
			&:before {
				content: "";
				position: absolute;
				top: 15px;
				bottom: 15px;
				left: 0;
				width: 1px;
				background-color: #5e7fb2;
			}
		}
	}
`;
const BottomFormTitle = styled.h3`
	font-size: 16px;
    line-height: 19px;
    color: #2b3b53;
    font-weight: 700;
    margin: 0 0 15px;
	@media screen and ( min-width: 575px ) {
		font-size: 18px;
		line-height: 21px;
	}
	@media screen and ( min-width: 768px ) {
		font-size: 21px;
		line-height: 24px;
	}
`;
const BottomForm = styled.div`
	position: relative;
	display: block;
`;
const BottomSide = styled.div`
	display: block;
`;
const BottomImg = styled.svg`
	margin-top: 5px;
    display: block;
    width: 259px;
    height: 49px;
`;
const BottomText = styled.p`
	margin: 15px 0;
	font-size: 16px;
    line-height: 19px;
    color: #4d4d4d;
	@media screen and ( min-width: 575px ) {
		font-size: 18px;
		line-height: 21px;
	}
	@media screen and ( min-width: 768px ) {
		font-size: 21px;
		line-height: 24px;
	}
`;
const BottomLink = styled.a`
	font-size: 30px;
    line-height: 34px;
    color: #ff8a3d;
    text-decoration: none;
    font-weight: 700;
	@media screen and ( min-width: 575px ) {
		font-size: 36px;
		line-height: 42px;
	}
`;

export {
	BottomContentWrapper, BottomTitle, BottomDescription, BottomRow, BottomCol, BottomFormTitle, BottomForm, BottomSide, BottomImg, BottomText, BottomLink
};