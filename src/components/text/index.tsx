// Packages
import React from 'react';

// Definitions
import { IText } from '@/def/IText';

// Styles
import { TextWrapper } from './style';

const Text: React.FC<IText> = ( props ) => {
	return (
		<TextWrapper center={props.center}>
			{props.children}
		</TextWrapper>
	);
};

export default Text;