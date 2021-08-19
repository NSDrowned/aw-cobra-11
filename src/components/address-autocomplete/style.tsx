// Packages
import styled from 'styled-components';

const AddressContainer = styled.div`
	display: block;
`;

const AddresWrapper = styled.div`
	background: #FFF;
	box-shadow: 0 3px 6px rgba( 0, 0, 0, .3 );
	overflow: hidden;
	position: absolute;
	z-index: 100;
	left: 0;
	right: 0;
	border-radius: 6px;
	margin-top: -32px;
`;

const AddressScroll = styled.ul`
	margin: 0 -30px 0 0;
	padding: 0;
	overflow-y: auto;
	max-height: 165px;
`;

const AddressItem = styled.li`
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 0 40px 0 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 30px;
	transition: all ease .3s;
	&:not(:last-child) {
		border-bottom: 1px solid #E6E6E6;
	}
	&:hover {
		background: #FAFAFA;
	}
`;

const AddressIcon = styled.svg`
	width: 12px;
	height: 12px;
	margin: 0 6px 0 -2px;
`;

const AddressText = styled.p`
	line-height: 16px;
	font-size: 13px;
	color: #000;
	span {
		font-size: 11px;
    color: #999;
	}
`;

export {
	AddressContainer,
	AddresWrapper,
	AddressScroll,
	AddressIcon,
	AddressText,
	AddressItem
};