import { IQuote } from "@/def/IQuotes";

interface IUIStepOne {
	modal: boolean,
	modalType: string
}

export interface IStateSite {
	month: string,
	year: number,
	quotes: IQuote[],
	ui: IUIStepOne
}