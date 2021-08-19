// Packages
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
	0%, 20%, 50%, 80%, 100% {
		transform: translateX( 0 );
	}
	40% {
		transform: translateX( -6px );
	}
	60% {
		transform: translateX( -4px );
	}
`;

const DirectionalCue = styled.svg<{ dealers?: boolean }>`
	position: absolute;
	top: ${props => props.dealers ? '15px' : '16px'};
	left: ${props => props.dealers ? '3px' : '-8px'};
	width: 21px;
	height: 21px;
	animation: ${bounce} ease 2s infinite;
	
	@media screen and ( min-width: 768px ) {
		top: ${props => props.dealers ? '22px' : '16px'};
		left: ${props => props.dealers ? '14px' : '-8px'};
	}
`;

export {
	DirectionalCue
}