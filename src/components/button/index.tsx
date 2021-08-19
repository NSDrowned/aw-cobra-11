// Definitions
import { IButton } from '@/def/IButton';

// Styles
import { ButtonWrapper, ButtonSpan } from './style';

const Button: React.FC<IButton> = (props) => {
	return (
		<ButtonWrapper onClick={props.handlerClick}>
			<ButtonSpan>{props.children}</ButtonSpan>
		</ButtonWrapper>
	);
};

export default Button;