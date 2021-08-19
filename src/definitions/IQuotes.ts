export interface IQuote {
	id: number,
	comment: string,
	name: string,
	photo: string,
	cityState: string
}

export interface IQuotes {
	items: IQuote[]
}