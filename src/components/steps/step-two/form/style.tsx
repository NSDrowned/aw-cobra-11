// Packages
import styled from 'styled-components';

const InputRow = styled.div`
	display: flex;
	> div {
		display: block;
		flex-basis: 0;
		flex-grow: 1;
		flex-shrink: 1;
		&:first-child {
			margin-right: 15px;
		}
	}
`;

export {
	InputRow
};