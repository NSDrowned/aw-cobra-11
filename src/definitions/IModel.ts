interface IMSRP {
	min_msrp: number,
	max_msrp: number
}

export interface IModel {
	id?: number,
	name?: string,
	value?: string,
	year?: string,
	msrp_range?: IMSRP,
	image?: string,
	rank?: number
}