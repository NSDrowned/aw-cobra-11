// Packages
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// Data
import { makes } from '@/data/makes';

// Definitions
import { RootState } from '@/def/TRootReducer';

// Slices
import { setIgnoredModels } from '@/redux/slices/thankyou';

// Styles
import GlobalStyles from '@/theme/global';
import PrimaryTheme from '@/theme/primary/typ';

// Utilities
import setPrefix from '@/util/prefix';

// Components
import Typ from '@/comp/typ/typ';
import TypHeader from '@/comp/typ/header';
import TypTopContent from '@/comp/typ/top-content';
import TypListing from '@/comp/typ/listing';
import TypBottomContent from '@/comp/typ/bottom-content';
import TypFooter from '@/comp/typ/footer';
import SVGs from '@/comp/typ/svgs';
import MetaData from '@/comp/meta-data';
import { setMakes } from '@/redux/slices/step-one';

const listingInfo = [
	{
		url: "#",
		urlTitle: "Listing url title",
		title: "Exclusive Deals For 2020 Ford F-250 in Miami",
		firstText: "CarsDirect has Exclusive Discounts Available Just For You",
		secondText: "Click to see your discount on a Ford F-250",
		shortUrl: "www.carsdirect.com",
		btnText: "See Price"
	}
];

export default function Thanks() {
  const router = useRouter();
  const dispatch = useDispatch();
  let image: string;

  const metadata = useSelector(( state: RootState) => state.metadata );
  const { prefix, separator } = metadata.thankyou;

  const title = setPrefix( prefix, metadata.name, separator )

  const make = useSelector(( state: RootState) => state.stepOne.data.selectedMake );
  const model = useSelector(( state: RootState) => state.stepOne.data.selectedModel );
  const zipcode = useSelector(( state: RootState) => state.stepOne.data.zipcode );
  const name = useSelector(( state: RootState) => state.stepTwo.data.first );
  const lastname = useSelector(( state: RootState) => state.stepTwo.data.last );
  const dealers = useSelector(( state: RootState) => state.stepTwo.data.selectedDealers );

  const ignoredModels = useSelector(( state: RootState ) => state.thankyou.data.ignoredModels );

  if ( ignoredModels !== undefined && ignoredModels.length !== 0 ) {
		image = ignoredModels[ignoredModels.length - 1].image;
	} else {
		image = '/defaultImage.png';
  }
  
  const handlerSubmit = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    let url: string;
    
    if ( zipcode.zip === undefined ) {
      url = `/${make.value}/${model.value}/`
    } else {
      const encodedCityState = btoa( `${zipcode.city}/${zipcode.state}` );
      url = `/s2/${make.value}/${model.value}/${zipcode.zip}?auth=${encodedCityState}`
    }
    
    router.push( url );
  };

  useEffect(() => {
    dispatch( setMakes( makes ) );
    if ( model.image !== undefined ) dispatch( setIgnoredModels( model ) );
  }, [])

  return (
    <ThemeProvider theme={PrimaryTheme}>
      <MetaData
        title={title}
      />
      <GlobalStyles />
      <Typ>
        <TypHeader />
        <div>
          <TypTopContent name={name} last={lastname} make={make.name} model={model.name} dealers={dealers} />
          <TypListing image={image} alt={`${make.name} ${model.name}`} listingInfo={listingInfo} />
          <TypBottomContent makes={makes} onSubmit={handlerSubmit} />
          <TypFooter />
        </div>
      </Typ>
      <SVGs />
    </ThemeProvider>
  );
}
