import { IMake } from '@/def/IMake';
import { IModel } from '@/def/IModel';

interface IZipCode {
	city?: string,
	state?: string,
	zip?: string
}

interface IDataStepOne {
	makes: IMake[],
	models: IModel[],
	selectedMake: IMake,
	selectedModel: IModel,
	zipcode: IZipCode,
}

interface IUIStepOne {
	button: string,
	imageLoading: boolean
}

export interface IStateStepOne {
	data: IDataStepOne,
	ui: IUIStepOne
}