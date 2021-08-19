// Packages
import Head from 'next/head';

// Definitions
import { IMetaData } from '@/def/IMetaData';

const MetaData: React.FC<IMetaData> = ( props ) => {
	return (
		<Head>
			<title>{props.title}</title>
			{props.description !== undefined && <meta name="description" content={props.description} />}
			{props.keywords !== undefined && <meta name="keywords" content={props.keywords} />}
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
			<meta name="robots" content="noindex, nofollow" />
			<meta name="audience" content="all" />
			<meta name="revisit-after" content="5 days" />
			<meta name="distribution" content="global" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5cb1e5" />
			<link rel="manifest" type="application/json" href="/favicon/manifest.json" />
		</Head>
	);
};

export default MetaData;