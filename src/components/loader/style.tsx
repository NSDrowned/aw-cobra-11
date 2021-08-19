// Packages
import styled, { keyframes } from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const loader = keyframes`
	0% {
		stroke-dashoffset: 120;
	}
	100% {
		stroke-dashoffset: -120;
	}
`;

const LoaderWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -20px;
	margin-left: -20px;
	width: 40px;
	height: 40px;
	background: #FFF;
	border-radius: 20px;
	box-shadow: 0 0 20px rgba( 0, 0, 0, .8 );
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoaderIcon = styled.svg<{ theme: ThemeType }>`
	width: 20px;
	height: 20px;
	stroke: ${props => props.theme.colors.primary};
	transform: rotate( -90deg );
	stroke-dasharray: 120;
	animation: ${loader} ease 1s infinite;
`;

export {
	LoaderWrapper,
	LoaderIcon
};