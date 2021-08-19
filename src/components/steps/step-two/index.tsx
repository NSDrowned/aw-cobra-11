// Packages
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Definitios
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Slice
import { setQuotes } from '@/redux/slices/site';

// Components
import Row from '@/comp/container/row';
import Column from '@/comp/container/column';
import Display from '@/comp/container/display';
import Quotes from '@/comp/quotes';
import CarInfo from '@/comp/car-info';
import CarInfoList from '@/comp/car-info/list';
import StepBox from '@/comp/steps/step-two/box';

const StepTwo: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const quotes = useSelector(( state: RootState ) => state.site.quotes );

	useEffect(() => {
		dispatch( setQuotes() );
	}, []);

	return (
		<Row>
			<Column sm={1} md={2}>
				<CarInfo model={props.model} />
				<Display hide="mobile">
					<Quotes items={quotes} />
				</Display>
			</Column>
			<Column sm={1} md={2}>
				<StepBox city={props.city} zipcode={props.zipcode} onSubmit={props.onSubmit} />
				<CarInfoList device="mobile" />
				<Display hide="desktop">
					<Quotes items={quotes} />
				</Display>
			</Column>
		</Row>
	);
};

export default StepTwo;