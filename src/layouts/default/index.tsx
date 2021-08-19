// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '../../definitions/IPlainObject';

// Components
import Header from '../../components/header';
import SVGs from '../../components/svgs';
import Footer from '../../components/footer';
import Container from '../../components/container';

const DefaultLayout: React.FC<IPlainObject> = ( props ) => {
	return (
		<>
			<Header />
			<Container>
				{props.children}
			</Container>
			<Footer />
			<SVGs />
		</>
	);
};

export default DefaultLayout;