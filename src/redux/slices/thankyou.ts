// Packages
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Definitions
import { IStateThankyou } from '@/def/IStateThankyou';

// Initial state
const initialThankyou: IStateThankyou = {
	data: {
		ignoredModels: []
	},
	ui: {}
};


const thankyouSlice = createSlice({
	name: 'thankyou',
	initialState: initialThankyou,
	reducers: {
		setIgnoredModels: ( state, action ) => {
			state.data.ignoredModels = state.data.ignoredModels.concat( action.payload );
		}
	},
});

export const { setIgnoredModels } = thankyouSlice.actions;

export default thankyouSlice.reducer