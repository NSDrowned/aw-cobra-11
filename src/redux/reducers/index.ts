// Packages
import { combineReducers } from 'redux';

// Slices
import siteSlice from '@/redux/slices/site';
import metadataSlice from '@/redux/slices/meta-data';
import stepOneSlice from '@/redux/slices/step-one';
import stepTwoSlice from '@/redux/slices/step-two';
import thankyouSlice from '@/redux/slices/thankyou';

const rootReducer = combineReducers({
	site: siteSlice,
	metadata: metadataSlice,
	stepOne: stepOneSlice,
	stepTwo: stepTwoSlice,
	thankyou: thankyouSlice
});

export default rootReducer;