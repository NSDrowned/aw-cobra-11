// Packages
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Definitios
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slices
import { setQuotes } from '@/redux/slices/site';

// Components
import HeroImage from '@/comp/hero-image';
import Row from '@/comp/container/row';
import Column from '@/comp/container/column';
import Display from '@/comp/container/display';
import FormOne from '@/comp/steps/step-one/form';
import Advantages from '@/comp/advantages';
import Quotes from '@/comp/quotes';

const StepOne: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const quotes = useSelector(( state: RootState ) => state.site.quotes );

	useEffect(() => {
		dispatch( setQuotes() );
	}, []);

	return (
		<Row>
			<Column sm={1} md={2}>
				<HeroImage />
				<Display hide="mobile">
					<Quotes items={quotes} />
				</Display>
			</Column>
			<Column sm={1} md={2}>
				<FormOne makes={props.makes} models={props.models} make={props.make} model={props.model} onSubmit={props.onSubmit} />
				<Advantages />
				<Display hide="desktop">
					<Quotes items={quotes} />
				</Display>
			</Column>
		</Row>
	);
};

export default StepOne;