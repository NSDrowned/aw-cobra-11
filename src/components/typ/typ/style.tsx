// Packages
import styled from 'styled-components';

const TypWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > header {
		order: 1;
	}
	& > div {
		width: 100%;
	}
	@media screen and ( min-width: 768px ) {
		& > header {
			order: 0;
		}
	}
`;

export {
	TypWrapper
};