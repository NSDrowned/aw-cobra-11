// Packages
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

// Data
import { makes } from '@/data/makes';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Layout
import DefaultLayout from '@/layout/default';

// Slices
import { setMakes, setModels, setSelectedMake } from '@/redux/slices/step-one';
import { setMonth } from '@/redux/slices/site';

// Components
import MetaData from '@/comp/meta-data';
import StepOne from '@/comp/steps/step-one';
import Redirect from '@/comp/redirect';
import Title from '@/comp/title';
import SubTitle from '@/comp/subtitle';

// Utilities
import setSuffix from '@/util/suffix';
import combineAnS from '@/util/combine-ans';
import setPrefix from '@/util/prefix';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary';

const Make: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const metadata = useSelector(( state: RootState ) => state.metadata );
	const stepOne = useSelector(( state: RootState ) => state.stepOne.data );
	const month = useSelector(( state: RootState ) => state.site.month );
	const { prefix, separator, description, keywordsPnS } = metadata.make;

	const { name, value } = props.make !== null ? props.make : { name: null, value: null };

	const title = `${setSuffix( prefix, name, ` ${separator} ` )} ${separator} ${metadata.name}`;
	const desc = combineAnS( description, name );
	const prekeys = setPrefix( keywordsPnS.prefix, name, ', ' );
	const sufkeys = setSuffix( keywordsPnS.suffix, name, ', ' );
	const keys = `${prekeys}, ${sufkeys}`;

	const handlerSubmit = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		const { selectedMake, selectedModel, zipcode } = stepOne;
		const {city, state, zip} = zipcode;
		const encodedCityState = btoa( `${city}/${state}` );
		window.open( `/s2/${selectedMake.value}/${selectedModel.value}/${zip}?auth=${encodedCityState}`, '', `width=${screen.width},height=${screen.height}` );
		router.push( '/fas' );
	};

	useEffect(() => {
		month.length === 0 && dispatch( setMonth() );
		dispatch( setMakes( makes ) );
		dispatch( setSelectedMake( value ) );
		dispatch( setModels( value ) );
	}, []);

	return (
		<>
			{props.make !== null ? (
				<ThemeProvider theme={PrimaryTheme}>
					<MetaData
						title={title}
						description={desc}
						keywords={keys}
					/>
					<GlobalStyles />
					<DefaultLayout>
						<Title>Huge Markdowns on {name} This Month!</Title>
						<SubTitle>Compare Prices from Multiple {name} Dealers and <strong>Get the Lowest Price</strong></SubTitle>
						<StepOne makes={makes} make={value} onSubmit={handlerSubmit} />
					</DefaultLayout>
				</ThemeProvider>
			) : (
				<Redirect />
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
	const make = makes.filter( item => item.value === context.query.make );

	return {
		props: {
			make: make.length !== 0 ? make[0] : null
		},
	}
}

export default Make;