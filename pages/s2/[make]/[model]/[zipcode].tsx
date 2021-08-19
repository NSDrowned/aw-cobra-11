// Packages
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import absoluteUrl from 'next-absolute-url';
import useScript from '@/src/hooks/useScript';

// Data
import { makes } from '@/data/makes';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';
import { RootState } from '@/def/TRootReducer';

// Layout
import DefaultLayout from '@/layout/default';

// Slices
import { setMonth } from '@/redux/slices/site';
import { saveModels, saveZipCode, setMakes, setSelectedMake, setSelectedModel } from '@/redux/slices/step-one';

// Components
import StepTwo from '@/comp/steps/step-two';
import Title from '@/comp/title';
import SubTitle from '@/comp/subtitle';

// Utilities
import setSuffix from '@/util/suffix';
import combineAnS from '@/util/combine-ans';
import setPrefix from '@/util/prefix';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary';
import MetaData from '@/comp/meta-data';

const PageStepTwo: React.FC<IPlainObject> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const metadata = useSelector(( state: RootState ) => state.metadata );
	const stepOne = useSelector(( state: RootState ) => state.stepOne.data );
	const month = useSelector(( state: RootState ) => state.site.month );

	const { models, make, model, zip } = props;
	const { prefix, separator, description, keywordsPnS } = metadata.model;
	const { zipcode } = stepOne;

	const name = `${make.name} ${model.name}`;
	const title = `${setSuffix( prefix, name, ` ${separator} ` )} ${separator} ${metadata.name}`;
	const desc = combineAnS( description, name );
	const prekeys = setPrefix( keywordsPnS.prefix, name, ', ' );
	const sufkeys = setSuffix( keywordsPnS.suffix, name, ', ' );
	const keys = `${prekeys}, ${sufkeys}`;

	const handlerSubmit = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		router.push( `/thankyou` );
	};

	useEffect(() => {
		month.length === 0 && dispatch( setMonth() );
		dispatch( setMakes( makes ) );
		dispatch( saveModels( models ) );
		dispatch( setSelectedMake( make.value ) );
		dispatch( setSelectedModel( model.value ) );
		dispatch(zip.city !== null ? saveZipCode(zip) : saveZipCode({}));
	}, []);

	console.log(props.make.name, props.model.name, props.fasZip, 'test');

	return (
		<>
			{props.model !== null && props.zip.city !== null ? (
				<ThemeProvider theme={PrimaryTheme}>
					<MetaData
						title={title}
						description={desc}
						keywords={keys}
					/>
					<GlobalStyles />
					<DefaultLayout>
						<Title>Yes! We Located {make.name} {model.name} Internet Deals</Title>
						<SubTitle>Choose your preferred dealers and fill out the form to find offers!</SubTitle>
						<StepTwo model={model} city={`${zipcode.city}, ${zipcode.state} ${zipcode.zip}`} zipcode={zipcode.zip} onSubmit={handlerSubmit} />
					</DefaultLayout>
				</ThemeProvider>
			) : (
				<>
					<MetaData
						title="Listings invalid Zip Code"
					/>
					<div className="content" dangerouslySetInnerHTML={{__html: `<div class="awlistings" aw-implement="1" aw-category="1" aw-make="`+ props.make.name +`" aw-model="`+ props.model.name +`" aw-zipcode="`+ props.fasZip +`"></div>`}}></div>
					{useScript('//cdn.awadserver.com/widget/js/awloader.min.js', '3382')}
				</>
			)}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
	let cs: string[];
	let zipcode: object;

	const cxtMake = context.query.make;
	const cxtModel = context.query.model;
	const cxtZip = context.query.zipcode;
	const auth:any = context.query.auth;

	const ssURL = `https://us-zipcode.api.smartystreets.com/lookup?auth-id=${process.env.SS_API_KEY}&auth-token=${process.env.SS_API_TOKEN}&zipcode=${cxtZip}`;

	const { origin } = absoluteUrl(context.req, context.req.headers.host);
	const resModels = await fetch( `${origin}/api/models/${cxtMake}` );
	const models = await resModels.json();

	const make = makes.filter( item => item.value === cxtMake );
	const model = models.filter( item => item.value === cxtModel );
	
	if ( auth !== undefined && auth !== '' ) {
		const decodedAuth = Buffer.from( auth, 'base64' ).toString();
		cs = decodedAuth.split( '/' );

		zipcode = { city: cs[0], state: cs[1], zip: cxtZip }
	} else {
		console.log( 'Remove the double diagonal from each line below to enable the SmartyStreet call' );
		// const resZipCode = await fetch( ssURL );
		// const jsonZipCode = await resZipCode.json();
		// const ssData = jsonZipCode[0];
		
		// if ( ssData.status === undefined ) {
		// 	const zcData = ssData.zipcodes[0];
		// 	zipcode = { city: zcData.default_city, state: zcData.state_abbreviation, zip: zipcode };
		// } else {
			zipcode = { city: null, state: null, zip: null }
		// }
	}

	return {
		props: {
			models: models.length !== 0 ? models : null,
			make: make.length !== 0 ? make[0] : null,
			model: model.length !== 0 ? model[0] : null,
			zip: zipcode,
			fasZip: cxtZip
		},
	}
}

export default PageStepTwo;