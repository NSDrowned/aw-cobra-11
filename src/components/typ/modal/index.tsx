// Packages
import React, { useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';

// Components
import ModalPrivacy from './privacy'
import ModalTerms from './terms';

// Definitions
import { IModal } from '@/def/IModal';

// Styles
import { ModalWrapper, ModalBody, ModalTitle, ModalClose, ModalCloseImg, ModalContent, ModalOverlay} from './style';

const Modal: React.FC<IModal> = (props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollTo } = useSmoothScroll({
		ref,
		speed: 300,
		direction: 'y',
	});

	return (
		<ModalWrapper showModal={props.isActive}>
			<ModalBody>
				<ModalTitle>
					{{
						'privacy': <>Privacy and Policy</>,
						'privacy-dont-sell': <>Privacy and Policy</>,
						'terms': <>Terms of Use</>,
						'terms-submit': <>Terms of Use</>
					}[props.modalType]}
				</ModalTitle>
				<ModalClose onClick={props.handlerClose}>
					<ModalCloseImg><use xlinkHref="#icon-close" /></ModalCloseImg>
				</ModalClose>
				<ModalContent ref={ref}>
					{props.modalType === 'privacy-dont-sell' ? scrollTo('#ccpa_v1') : null}
					{props.modalType === 'terms-submit' ? scrollTo('#tcpa_v3') : null }
					{{
						'privacy': <ModalPrivacy />,
						'privacy-dont-sell': <ModalPrivacy />,
						'terms': <ModalTerms />,
						'terms-submit': <ModalTerms />
					}[props.modalType]}
				</ModalContent>
			</ModalBody>
			<ModalOverlay onClick={props.handlerClose} />
		</ModalWrapper>
	);
};

export default Modal;