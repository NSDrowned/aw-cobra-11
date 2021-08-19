// Packages
import { useDispatch, useSelector } from 'react-redux';

// Definitions
import { IBoxFooter } from '@/def/IBox';
import { RootState } from '@/def/TRootReducer';

// Slices
import { setModal, setModalType } from '@/redux/slices/site';

// Components
import Text from '../../text';

// Styles
import {BoxFooterWrapper, BoxFooterProtect, BoxFooterIcon, BoxFooterTCPA } from './style';

const BoxFooter: React.FC<IBoxFooter> = (props) => {
	const dispatch = useDispatch();
	const button = useSelector((state: RootState) => state.stepTwo.ui.button);
	
	const handlerModalOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const target = (e.target as HTMLAnchorElement);
		document.body.style.overflow = 'hidden';

		dispatch(setModal(true));
		dispatch(setModalType(target.dataset.type));
	};

	return (
		<>
			{props.step === '1' &&
				<BoxFooterWrapper>
					<Text center={true}>Search <strong>Authorized</strong> Dealers Ready to Offer You Their <strong>Lowest</strong> Price!</Text>
				</BoxFooterWrapper>
			}
			{props.step === '3' &&
				<BoxFooterWrapper>
					<BoxFooterProtect>
						<BoxFooterIcon><use xlinkHref="#icon-security" /></BoxFooterIcon>
						We protect your personal information.
					</BoxFooterProtect>
					<BoxFooterTCPA>
						By clicking "{button}" I accept and agree to be bound by your <a href="#terms" data-type="terms" onClick={handlerModalOpen}>Terms of Use</a> and acknowledge receipt of your <a href="#privacy" data-type="privacy" onClick={handlerModalOpen}>Privacy Policy</a>.
					</BoxFooterTCPA>
				</BoxFooterWrapper>
			}
		</>
	);
};

export default BoxFooter;