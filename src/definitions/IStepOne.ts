export interface IMakes {
	id: string,
	value: string,
	name?: string
}

export interface IStepOne {
    makes: IMakes[];
}