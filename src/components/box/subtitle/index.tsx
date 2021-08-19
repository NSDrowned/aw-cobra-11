// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { BoxSubTitle } from './style';

const Title: React.FC<IPlainObject> = ( props ) => {
	return (
		<BoxSubTitle>{props.children}</BoxSubTitle>
	);
};

export default Title;