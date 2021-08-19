// Packages
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slices
import { setBoxActive } from '@/redux/slices/step-two';

// Components
import FormTwo from '../form';
import DealersBox from '../dealers';

// Styles
import { StepBoxWrapper } from './style';

const StepBox: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const boxActive = useSelector(( state: RootState ) => state.stepTwo.ui.boxActive );
	const dealers = useSelector(( state: RootState ) => state.stepTwo.data.dealers );

	const handlerClick = ( e: React.MouseEvent<HTMLButtonElement> ) => dispatch( setBoxActive( 'form' ) );

	useEffect(() => {
		dispatch( setBoxActive( 'dealers' ) );
	}, [])

	return (
		<StepBoxWrapper one={dealers.length === 1} active={boxActive}>
			{dealers.length > 1 ? (
				<>
					<CSSTransition unmountOnExit in={boxActive === 'dealers'} timeout={300} classNames="s2-dealers">
						<div className="s2-dealers">
							<DealersBox handlerButton={handlerClick} />
						</div>
					</CSSTransition>
					<CSSTransition unmountOnExit in={boxActive === 'form'} timeout={300} classNames="s2-form">
						<div className="s2-form">
							<FormTwo city={props.city} zipcode={props.zipcode} onSubmit={props.onSubmit} />
						</div>
					</CSSTransition>
				</>
			) : (
				<>
					<DealersBox handlerButton={handlerClick} />
					<FormTwo city={props.city} zipcode={props.zipcode} onSubmit={props.onSubmit} />
				</>
			)}
		</StepBoxWrapper>
	);
};

export default StepBox;