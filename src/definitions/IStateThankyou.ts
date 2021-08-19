import { IModel } from '@/def/IModel';

interface IDataThankyou {
	ignoredModels: IModel[]
}

export interface IStateThankyou {
	data: IDataThankyou,
	ui: object
}