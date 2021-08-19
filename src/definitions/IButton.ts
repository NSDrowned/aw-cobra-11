export interface IButton {
    isDisabled?: boolean;
    handlerClick?: ( event: React.MouseEvent<HTMLButtonElement> ) => void;
}