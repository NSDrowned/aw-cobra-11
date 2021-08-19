// Packages
import React from 'react';

// Definitions
import { IColumn } from '@/def/IColumn';

// Styles
import { ColumnWrapper } from './style';

const Column: React.FC<IColumn> = ( props ) => {
	return (
		<ColumnWrapper sm={props.sm} md={props.md}>
			{props.children}
		</ColumnWrapper>
	);
};

export default Column;