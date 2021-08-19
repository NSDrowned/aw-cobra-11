// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import { SubTitleWrapper } from './style';

const SubTitle: React.FC<IPlainObject> = ( props ) => {
	return (
		<SubTitleWrapper>{props.children}</SubTitleWrapper>
	);
};

export default SubTitle;