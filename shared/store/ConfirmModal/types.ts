export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export interface InitialState {
    isOpen: Boolean;
    confirm: typeof Function | null;
    decline: typeof Function | null;
    headerText: String;
}
export interface ShowModalPayload {
    confirm: typeof Function,
    decline: typeof Function,
    headerText: String;
}