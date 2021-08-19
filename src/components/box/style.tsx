// Packages
import styled from 'styled-components';

// Definitions
import { ThemeType } from '@/def/TTheme';

const BoxWrapper = styled.div<{ theme: ThemeType }>`
	margin: 0;
	border-radius: 7px;
	box-shadow: ${props => props.theme.box.shadow};
	border: ${props => props.theme.box.border};
	background-color: ${props => props.theme.background.box};
	padding: 15px;
	color: ${props => props.theme.colors.text};

	@media screen and ( min-width: 768px ) {
		padding: 20px 30px;
	}
`;

const BoxHeader = styled.div`
	margin-bottom: 15px;
`;

export {
	BoxWrapper,
	BoxHeader
};