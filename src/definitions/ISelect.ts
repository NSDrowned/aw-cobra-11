import { IMake } from "./IMake";
import { IModel } from "./IModel";

export interface ISelect {
	id: string,
	value: string,
	name: string,
	label: string,
	cue: boolean,
	error: boolean,
	message: string,
	options?: ( IMake | IModel )[],
	handlerChange?: ( event: React.ChangeEvent<HTMLSelectElement> ) => void
}