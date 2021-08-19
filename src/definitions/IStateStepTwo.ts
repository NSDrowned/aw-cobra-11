import { IDealer } from '@/def/IDealers';

interface IDataStepTwo {
	dealers: IDealer[],
	selectedDealers: IDealer[],
	first: string,
	last: string,
	phone: string,
	address: string,
	email: string
}

interface IUIStepTwo {
	button: string,
	boxActive: 'dealers' | 'form'
}

export interface IStateStepTwo {
	data: IDataStepTwo,
	ui: IUIStepTwo
}