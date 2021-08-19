export interface IModal {
    isActive: boolean;
    modalType: string;
    handlerClose?: ( event: React.MouseEvent<HTMLDivElement> ) => void;
}