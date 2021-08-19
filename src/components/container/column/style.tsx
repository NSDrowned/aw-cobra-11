// Packages
import styled from 'styled-components';

const ColumnWrapper = styled.div<{ sm: number, md: number }>`
	-webkit-box-flex: 0;
	flex: 0 0 ${props => `${100 / props.sm}%`};
	max-width: ${props => `${100 / props.sm}%`};
	padding: 0 5px;
	
	@media screen and ( min-width: 768px ) {
		flex: 0 0 ${props => `${100 / props.md}%`};
		max-width: ${props => `${100 / props.md}%`};
		padding: 0 7px;
	}

	@media screen and ( min-width: 1024px ) {
		padding: 0 15px;
	}
`;

export {
	ColumnWrapper
};