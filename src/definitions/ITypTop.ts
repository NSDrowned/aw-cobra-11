export interface ISelectedDealers {
	id: string,
	name: string
}

export interface ITypTop {
	name: string,
	last: string,
	make: string,
    model: string,
	dealers?: ISelectedDealers[],
}