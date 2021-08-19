// Packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slices
import { setModal, setModalType } from '@/redux/slices/site';

// Components
import Container from '../container';
import Modal from '../modal'

// Styles
import { FooterWrapper, FooterCert, FooterContent, FooterText } from './style';

const Footer: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const year = useSelector((state: RootState) => state.site.year);
	const modal = useSelector((state: RootState) => state.site.ui.modal);
	const modalType = useSelector((state: RootState) => state.site.ui.modalType);

	const handlerModalOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const target = (e.target as HTMLAnchorElement);
		document.body.style.overflow = 'hidden';

		dispatch(setModal(true));
		dispatch(setModalType(target.dataset.type));
	};

	const handlerModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
		document.body.style.overflow = 'unset';
		dispatch(setModal(false));
		dispatch(setModalType(''));
	};

	return (
		<>
			<FooterWrapper>
				<Container>
					<FooterCert>
						DigiCert Here
					</FooterCert>
					<FooterContent>
						<FooterText>This is a free service with absolutely no obligation.</FooterText>
						<FooterText><a href="#privacy" data-type="privacy" onClick={handlerModalOpen}>Privacy Policy</a> | <a href="#dont-sell" data-type="privacy-dont-sell" onClick={handlerModalOpen}>Do Not Sell My Personal Information</a> | <a href="#terms" data-type="terms" onClick={handlerModalOpen}>Terms of Use</a></FooterText>
						<FooterText>©{year} AutoWeb Inc. All Rights Reserved.</FooterText>
					</FooterContent>
				</Container>
			</FooterWrapper>
			{modal ? <Modal isActive={modal} modalType={modalType} handlerClose={handlerModalClose} /> : null }
		</>
	);
};

export default Footer;