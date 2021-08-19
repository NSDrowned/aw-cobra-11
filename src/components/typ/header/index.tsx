// Packages
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// Components
import Container from '../container';

// Styles
import { HeaderWrapper, HeaderImg } from './style';

const Header: React.FC = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<HeaderWrapper>
			<Container>
				<HeaderImg><use xlinkHref={themeContext.logo.filename} /></HeaderImg>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;