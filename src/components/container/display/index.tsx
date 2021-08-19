// Packages
import React from 'react';

// Definitions
import { IDisplay } from '@/def/IDisplay';

// Styles
import { DisplayWrapper } from './style';

const Display: React.FC<IDisplay> = ( props ) => {
	return (
		<DisplayWrapper hide={props.hide}>
			{props.children}
		</DisplayWrapper>
	);
};

export default Display;