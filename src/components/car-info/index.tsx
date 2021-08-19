// Packages
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/def/TRootReducer';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Components
import CarInfoList from './list';

// Styles
import { CarInfoWrapper, CarInfoImage, CarInfoContent, CarInfoText } from './style';

const CarInfo: React.FC<IPlainObject> = ( props ) => {
	const model = props.model;

	const numberWithCommas = ( number: number ) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return (
		<CarInfoWrapper>
			<CarInfoImage src={model.image} alt={model.name} />
			<CarInfoContent>
				<CarInfoText green>Base MSRP. ${model.msrp_range.min_msrp}</CarInfoText>
				<CarInfoText>Fill out the form to find <strong>offers</strong> from your <strong>preferred</strong> dealers!</CarInfoText>
				<CarInfoList device="desktop" />
			</CarInfoContent>
		</CarInfoWrapper>
	);
};

export default CarInfo;