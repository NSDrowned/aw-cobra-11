// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import ContainerWrapper from './style';

const Container: React.FC<IPlainObject> = ( props ) => {
	return (
		<ContainerWrapper>
			{props.children}
		</ContainerWrapper>
	);
};

export default Container;