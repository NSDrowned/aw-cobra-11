// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const HeroImageWrapper = styled.div<{ theme: ThemeType, step?: number }>`
	margin: 15px auto;
	@media screen and ( min-width: 500px ) {
		max-width: 500px;
	}
	@media screen and ( min-width: 768px ) {
		max-width: 100%;
		margin: 0;
	}
`;
const HeroImageContainer = styled.div`
	overflow: hidden;
	padding-bottom: 62.55%;
	border-radius: 7px;
`;

const HeroImageCover = styled.picture`
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	img {
		opacity: 1;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		min-width: 50%;
		min-height: 50%;
		overflow: hidden;
		width: 50%;
		transition: all ease .3s;
	}
`;

const Placeholder = styled.div<{ theme: ThemeType, step?: number }>`
	width: 100%;
	height: 206px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #EEE;
	border-radius: 7px;
	font-size: 40px;
	color: #A6A6A6;
	line-height: 209px;
	z-index: 1;

	@media screen and ( min-width: 768px ) {
		height: 294px;
	}
`;

export {
	HeroImageWrapper,
	HeroImageContainer,
	HeroImageCover,
	Placeholder
};