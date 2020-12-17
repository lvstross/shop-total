import { SHOW_MODAL, CLOSE_MODAL, InitialState } from './types';
  
const INITIAL_STATE: InitialState = {
    isOpen: false,
    confirm: null,
    decline: null,
    headerText: '',
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                isOpen: true,
                confirm: action.payload.confirm,
                decline: action.payload.decline,
                headerText: action.payload.headerText,
            };
        case CLOSE_MODAL:
            return {
                ...INITIAL_STATE,
            };
        default: return state;
    }
};

export default reducer;