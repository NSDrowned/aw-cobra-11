// Packages
import styled from 'styled-components';

const ContainerWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 15px;
	max-width: ${props => props.theme.container.sm};
	@media screen and ( min-width: 768px ) {
		max-width: ${props => props.theme.container.md};
	}
	@media screen and ( min-width: 1024px ) {
		max-width: ${props => props.theme.container.lg};
	}
`;

export default ContainerWrapper;