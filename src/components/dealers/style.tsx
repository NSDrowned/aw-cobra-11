// Packages
import styled, { css } from 'styled-components';

const DealersWrapper = styled.div<{ one?: boolean }>`
	user-select: none;
	${props => !props.one && css`
		margin: 0 -15px;
	`}
	margin-bottom: ${props => props.one ? '15px' : '8px'};

	@media screen and ( min-width: 768px ) {
		${props => !props.one && css`
			margin: 0 -30px;
		`}
		margin-bottom: ${props => props.one ? '0' : '15px'};
	}
`;

const DealersError = styled.p`
	color: #E31818;
	border-bottom: 2px solid #E31818;
	margin: 0;
	padding: 0 15px 4px;

	@media screen and ( min-width: 768px ) {
		padding: 0 30px 4px;
	}
`;

export {
	DealersWrapper,
	DealersError
}