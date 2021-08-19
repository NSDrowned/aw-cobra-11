// Packages
import styled from 'styled-components';

const RowWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
	margin: 0 -5px;
	
	@media screen and ( min-width: 768px ) {
		margin: 0 -7px;
	}

	@media screen and ( min-width: 1024px ) {
		margin: 0 -15px;
	}
`;

export {
	RowWrapper
};