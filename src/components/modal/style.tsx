// Packages
import styled, { css } from 'styled-components';

const ModalWrapper = styled.div<{ showModal: boolean }>`
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
	background-color: rgba(255,255,255,.5);
	${props => props.showModal && css`
		display: flex;
	`}
`;

const ModalBody = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    width: 90%;
    padding: 50px 20px 20px;
    max-height: 584px;
    max-width: 584px;
    height: 90%;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    @media screen and ( min-width: 768px ) {
		padding: 65px 25px 25px;
	}
`;
const ModalTitle = styled.h2`
    position: absolute;
    top: 15px;
    color: #565656;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin: 0;
    @media screen and ( min-width: 768px ) {
        top: 25px;
	}
`;
const ModalClose = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ModalCloseImg = styled.svg`
	width: 15px;
    height: 15px;
`;
const ModalContent = styled.div<{ ref: any }>`
	overflow: auto;
    height: 100%;
    padding-right: 20px;
    h2 {
        font-weight: 700;
        color: #565656;
        line-height: 28px;
        font-size: 18px;
        margin: 20px 0 10px;
    }
    h3 {
        font-weight: 700;
        color: #565656;
        line-height: 28px;
        font-size: 16px;
        margin: 20px 0 10px;
    }
    p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        font-size: 12px;
        margin-bottom: 10px;
        margin-top: 0;
        line-height: 1.4em;
        color: #565656;
        @media screen and ( min-width: 768px ) {
            font-size: 16px;
            margin-bottom: 15px;
        }
    }
    a {
        font-size: 12px;
        color: #3a78c5;
        @media screen and ( min-width: 768px ) {
            font-size: 16px;
        }
    }
    ul {
        line-height: 1.4em;
        color: #4d4d4d;
        font-size: 12px;
        li {margin-bottom: 15px;}
        @media screen and ( min-width: 768px ) {
            font-size: 16px;
        }
    }
`;
const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
    backdrop-filter: blur(10px);
    transition: all cubic-bezier(.68,-.55,.265,1.55) .5s;
`;

export {
	ModalWrapper, ModalBody, ModalTitle, ModalClose, ModalCloseImg, ModalContent, ModalOverlay
};