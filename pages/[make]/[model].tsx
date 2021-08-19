// Packages
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import absoluteUrl from 'next-absolute-url';

// Data
import { makes } from '@/data/makes';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Layout
import DefaultLayout from '@/layout/default';

// Slices
import { setMonth } from '@/redux/slices/site';
import { setMakes, setSelectedMake, saveModels, setSelectedModel } from '@/redux/slices/step-one';

// Components
import StepOne from '@/comp/steps/step-one';
import Redirect from '@/comp/redirect';
import Title from '@/comp/title';
import SubTitle from '@/comp/subtitle';
import MetaData from '@/comp/meta-data';

// Utilities
import setSuffix from '@/util/suffix';
import combineAnS from '@/util/combine-ans';
import setPrefix from '@/util/prefix';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary';

const Home: React.FC<IPlainObject> = ( props ) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const metadata = useSelector(( state: RootState ) => state.metadata );
	const stepOne = useSelector(( state: RootState ) => state.stepOne.data );
	const month = useSelector(( state: RootState ) => state.site.month );

	const { models, make, model } = props;
	const { prefix, separator, description, keywordsPnS } = metadata.model;

	const name = `${make.name} ${model.name}`;
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
		dispatch( setSelectedMake( make.value ) );
		dispatch( saveModels( models ) );
		dispatch( setSelectedModel( model.value ) );
	}, []);

	return (
		<>
			{props.model.length !== 0 ? (
				<ThemeProvider theme={PrimaryTheme}>
					<MetaData
						title={title}
						description={desc}
						keywords={keys}
					/>
					<GlobalStyles />
					<DefaultLayout>
						<Title>Huge Markdowns on {name} This Month!</Title>
						<SubTitle>Compare Prices from Multiple {make.name} Dealers and <strong>Get the Lowest Price</strong></SubTitle>
						<StepOne makes={makes} models={models} make={make.value} model={model.value} onSubmit={handlerSubmit} />
					</DefaultLayout>
				</ThemeProvider>
			) : (
				<Redirect />
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
	const { origin } = absoluteUrl(context.req, context.req.headers.host);
	const response = await fetch( `${origin}/api/models/${context.query.make}` );
	const models = await response.json();
	const make = makes.filter( item => item.value === context.query.make );
	const model = models.filter( item => item.value === context.query.model );

	return {
		props: {
			models,
			make: make.length !== 0 ? make[0] : null,
			model: model.length !== 0 ? model[0] : null
		},
	}
}
export default Home;