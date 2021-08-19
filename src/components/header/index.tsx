// Packages
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Components
import Container from '../container';

// Styles
import { HeaderWrapper, HeaderLogo, HeaderContent, HeaderTitle, HeaderText, HeaderTitleBox } from './style';

const Header: React.FC<IPlainObject> = (props) => {
	const month = useSelector(( state: RootState ) => state.site.month );
	const themeContext = useContext(ThemeContext);

	return (
		<HeaderWrapper>
			<Container>
				<HeaderLogo><use xlinkHref={themeContext.logo.filename} /></HeaderLogo>
				<HeaderContent>
					<HeaderTitle>Huge&nbsp;<HeaderTitleBox>{month}</HeaderTitleBox>&nbsp;Closeout</HeaderTitle>
					<HeaderText><span>Car enthusiasts at your service</span></HeaderText>
				</HeaderContent>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;