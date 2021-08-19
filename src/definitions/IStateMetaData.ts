interface IStateKeywords {
	prefix: string[],
	suffix: string[]
}

interface IStatePage {
	prefix: string[],
	separator: string,
	description: string[],
	keywords?: string,
	keywordsPnS?: IStateKeywords
}

export interface IStateMetaData {
	name: string,
	home: IStatePage,
	make: IStatePage,
	model: IStatePage,
	form: IStatePage,
	thankyou: IStatePage
}