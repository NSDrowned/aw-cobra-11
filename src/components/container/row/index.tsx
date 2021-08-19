// Packages
import React from 'react';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { RowWrapper } from './style';

const Row: React.FC<IPlainObject> = ( props ) => {
	return (
		<RowWrapper>
			{props.children}
		</RowWrapper>
	);
};

export default Row;