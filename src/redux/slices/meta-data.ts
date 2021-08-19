// Packages
import { createSlice } from '@reduxjs/toolkit';

// Definitions
import { IStateMetaData } from '@/def/IStateMetaData';

// Utilities
import getMonth from '@/util/get-month';
import getYear from '@/util/get-year'

// Initial state
const initialMetaData: IStateMetaData = {
	name: 'Car.com',
	home: {
		prefix: ['New Car Closeout', 'New Car Deals'],
		separator: '|',
		description: [`Huge ${getMonth()} Markdowns On New Cars. Get Your Internet Price Now & Save`],
		keywords: 'new cars, new auto, car dealers, car sales, car deals, car prices, suv sales, truck sales, car dealerships'
	},
	make: {
		prefix: ['Clearance', 'Deals'],
		separator: '|',
		description: [`Huge ${getMonth()} `, ' Markdowns On New Cars. Get Your Internet Price Now & Save'],
		keywordsPnS: {
			prefix: ['new'],
			suffix: ['dealers', 'sales', 'prices', 'deals', 'clearance', 'cars', 'trucks', 'suv', 'dealerships']
		}
	},
	model: {
		prefix: ['Clearance', 'Deals'],
		separator: '|',
		description: [`Whopping Discount On ${getYear()} `, '! Get a ', ' Internet Price Now'],
		keywordsPnS: {
			prefix: ['new'],
			suffix: ['dealers', 'sales', 'prices', 'deals', 'clearance', 'cars', 'trucks', 'suv', 'dealerships']
		}
	},
	form: {
		prefix: ['Clearance', 'Deals'],
		separator: '|',
		description: [`Whopping Discount On ${getYear()} `, '! Get a ', ' Internet Price Now'],
		keywordsPnS: {
			prefix: ['new'],
			suffix: ['dealers', 'sales', 'prices', 'deals', 'clearance', 'cars', 'trucks', 'suv', 'dealerships']
		}
	},
	thankyou: {
		prefix: ['Thank You'],
		separator: '|',
		description: [],
		keywords: ''
	}
};

const metadataSlice = createSlice({
	name: 'meta-data',
	initialState: initialMetaData,
	reducers: {}
});

export const {} = metadataSlice.actions;

export default metadataSlice.reducer;