// Packages
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useScript from '@/src/hooks/useScript';
import { GetServerSideProps } from 'next';

// Definitions
import { IPlainObject } from '@/def/IPlainObject';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary';

const FAS: React.FC<IPlainObject> = (props) => {
	return (
		<ThemeProvider theme={PrimaryTheme}>
			<Head>
				<title>FAS Here</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5cb1e5" />
				<link rel="manifest" type="application/json" href="/favicon/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
			</Head>
			<GlobalStyles />
			<div className="content" dangerouslySetInnerHTML={{__html: `<div class="awlistings" aw-implement="1" aw-category="1" aw-make="`+ props.make +`" aw-model="`+ props.model +`" aw-zipcode="`+ props.zip +`"></div>`}}></div>
			{useScript('//cdn.awadserver.com/widget/js/awloader.min.js', '3382')}
			
		</ThemeProvider>
	);
};

export const getServerSideProps: GetServerSideProps = async ( context ) => {
	const cxtMake = context.query.make;
	const cxtModel = context.query.model;
	const cxtZip = context.query.zipcode;

	return {
		props: {
			make: cxtMake,
			model: cxtModel,
			zip: cxtZip
		},
	}
}

export default FAS;