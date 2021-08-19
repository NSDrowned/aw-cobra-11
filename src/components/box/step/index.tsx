// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { StepWrapper } from './style';

const Box: React.FC<IPlainObject> = ( props ) => {
	return (
		<StepWrapper>{props.children}</StepWrapper>
	);
};

export default Box;