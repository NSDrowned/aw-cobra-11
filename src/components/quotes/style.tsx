// Packages
import styled from 'styled-components';
import { ThemeType } from '@/def/TTheme';

const QuotesWapper = styled.div`
	overflow: hidden;
	user-select: none;
	margin: 24px 0 0;
`;

const QuotesScroll = styled.div`
	display: flex;
	overflow-x: scroll;
	padding-bottom: 30px;
	margin-bottom: -38px;
	scrollbar-width: thin;
	::-webkit-scrollbar {
		height: 8px;
	}

	@media ( hover: none ) and ( pointer: coarse ) {
		-webkit-overflow-scrolling: touch;
		scroll-snap-points-x: repeat(100%);
		scroll-snap-destination: 0 0;
		scroll-snap-type: x mandatory;
		scroll-snap-type: mandatory;
		scroll-behavior: smooth;	
	}
`;

const QuotesNav = styled.div<{ theme: ThemeType, active: number }>`
	display: flex;
	justify-content: center;
	margin: 10px 0 0;
	> div {
		&:nth-child( ${props => props.active} ) {
			&:before {
				transform: scale( .46 );
				background: ${props => props.theme.background.quote.dot.active};
			}
		}
	}
`;

const Quote = styled.div<{ theme: ThemeType }>`
	height: 100%;
	display: flex;
	padding: 15px;
	background: ${props => props.theme.background.quote.default};
	border-radius: 7px;
	min-width: 100%;
	scroll-snap-align: start;
	&:not(:last-child) {
		margin: 0 15px 0 0;
	}
`;

const QuotePhoto = styled.img`
	width: 46px;
	height: 46px;
	border-radius: 46px;
	margin-right: 15px;
`;

const QuoteContent = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
`;

const QuoteText = styled.blockquote`
	margin: 0 0 5px;
	font-style: italic;
	color: ${props => props.theme.colors.quote.default};
	font-size: 14px;
	line-height: 20px;

	@media screen and ( min-width: 768px ) {
		margin: 0 0 10px;
		font-size: 16px;
	}
`;

const QuoteName = styled.p`
	margin: 0;
	font-size: 12px;
	line-height: 14px;
	color: ${props => props.theme.colors.quote.secondary};
`;

const QuoteDot = styled.div<{ theme: ThemeType }>`
	cursor: pointer;
	width: 20px;
	height: 20px;
	overflow: hidden;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		background: ${props => props.theme.background.quote.dot.default};
		transform: scale( .3 );
		transition: all ease .2s;
	}
`;

export {
	QuotesWapper,
	QuotesScroll,
	QuotesNav,
	Quote,
	QuotePhoto,
	QuoteContent,
	QuoteText,
	QuoteName,
	QuoteDot
}