// Packages
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';
import { IDealer } from '@/def/IDealers';

// Slices
import { setSelectedDealers } from '@/redux/slices/step-two';

// Components
import Box from '@/comp/box';
import Button from '@/comp/button';
import Dealers from '@/comp/dealers';

const DealersBox: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const dealersList = useSelector( ( state: RootState ) => state.stepTwo.data.dealers );
	const dealersSelected = useSelector(( state: RootState ) => state.stepTwo.data.selectedDealers );
	const [error, setError] = useState<boolean>( false );
	const [cue, setCue] = useState<boolean>( true );
	const [dealers, setDealers] = useState({ allChecked: false, list: dealersList.map( ( item: IDealer ) => ({ ...item, isChecked: false }) ) });

	const oneDealerCheck = () => {
		if ( dealersList.length === 1 ) {
			let { allChecked, list } = dealers;
			allChecked = true;
			list = list.map( item => ({ ...item, isChecked: true }) );

			setDealers({ allChecked, list });
			dispatch( setSelectedDealers( list ) );
		}
	};

	const handlerChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const elemID = e.target.id;
		const elemChecked = e.target.checked;
		let { allChecked, list } = dealers;

		if ( elemID === 'all-dealers' ) {
			allChecked = elemChecked,
			list = list.map( item => ({ ...item, isChecked: elemChecked }) )
		} else {
			list = list.map( item => item.id === elemID ? { ...item, isChecked: elemChecked } : item);
			allChecked = list.every( item => item.isChecked );
		}

		const selectedDealers = list.filter( item => item.isChecked );
		dispatch( setSelectedDealers( selectedDealers ) );
		setDealers({ allChecked, list });
		setError( false );
		setCue( selectedDealers.length !== 0 ? false : true );
	};

	const handlerClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		dealersSelected.length !== 0 ? props.handlerButton( e ) : setError( true );
	};

	useEffect(() => {
		oneDealerCheck();
	}, [])

	return (
		<Box step="2" totalSteps="3" title={dealers.list.length > 1 ? 'Choose Your Dealers' : 'We found this matching dealer!' } subtitle={dealers.list.length > 1 && 'Compare prices from multiple dealers'}>
			<Dealers cue={cue} items={dealers.list} allChecked={dealers.allChecked} error={error} handlerChange={handlerChange} />
			<Button isDisabled={false} handlerClick={handlerClick}>Continue</Button>
		</Box>
	);
};

export default DealersBox;