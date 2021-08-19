export interface IFields {
    [index: string]: IField
}

export interface IField {
    field: string,
    value: string,
    status: 'empty' | 'error' | 'success'
}

export interface fieldAction {
    type: string,
    payload: {
        field: string,
        value: string
    }
}