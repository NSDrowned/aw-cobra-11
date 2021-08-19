export interface IListingData {
	url: string,
	urlTitle: string,
	title: string,
	firstText: string,
	secondText: string,
	shortUrl: string,
	btnText: string
}

export interface IListing {
	image: string,
	alt: string,
	listingInfo: IListingData[],
}