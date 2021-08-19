// Packages
import styled, {css} from 'styled-components';

const DisplayWrapper = styled.div<{ hide: string }>`
	${props => props.hide && props.hide === 'mobile' && css`
		display: none;
		@media screen and ( min-width: 768px ) {
			display: block;
		}
	`}
	${props => props.hide && props.hide === 'desktop' && css`
		@media screen and ( min-width: 768px ) {
			display: none;
		}
	`}
`;

export {
	DisplayWrapper
};