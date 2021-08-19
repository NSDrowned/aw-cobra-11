// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { LoaderIcon, LoaderWrapper } from './style';

const Loader: React.FC<IPlainObject> = ( props ) => {
	return (
		<LoaderWrapper>
			<LoaderIcon><use xlinkHref="#loader" /></LoaderIcon>
		</LoaderWrapper>
	);
};

export default Loader;