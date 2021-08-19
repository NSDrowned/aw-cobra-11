// Packages
import { createSlice } from '@reduxjs/toolkit';

// Definitions
import { IStateStepTwo } from '@/def/IStateStepTwo';

// Data
const dealers = [
	{id: '142691_1', name: 'Midway Ford', address: '8155 W Flagler St, Miami, FL'},
	{id: '130649_2', name: 'Palmetto Truck Center', address: '7245 N W 36th St, Miami, FL'},
	{id: '130649_3', name: 'Metro Ford Inc', address: '9000 Nw 7th Ave, Miami, FL'}
]

// Initial state
const initialStepTwo: IStateStepTwo = {
	data: {
		dealers,
		selectedDealers: [],
		first: '',
		last: '',
		phone: '',
		address: '',
		email: '',
	},
	ui: {
		button: 'Get Pricing',
		boxActive: 'dealers'
	}
};

const stepTwoSlice = createSlice({
	name: 'step-two',
	initialState: initialStepTwo,
	reducers: {
		setBoxActive: ( state, action ) => { state.ui.boxActive = action.payload },
		setSelectedDealers: ( state, action ) => { state.data.selectedDealers = action.payload },
		saveFirstName: ( state, action ) => { state.data.first = action.payload },
		saveLastName: ( state, action ) => { state.data.last = action.payload },
		savePhoneNumber: ( state, action ) => { state.data.phone = action.payload },
		saveAddress: ( state, action ) => { state.data.address = action.payload },
		saveEmail: ( state, action ) => { state.data.email = action.payload }
	}
});

export const { setBoxActive, setSelectedDealers, saveFirstName, saveLastName, savePhoneNumber, saveAddress, saveEmail } = stepTwoSlice.actions;

export default stepTwoSlice.reducer