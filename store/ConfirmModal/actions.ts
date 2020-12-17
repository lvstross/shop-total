import { SHOW_MODAL, CLOSE_MODAL, ShowModalPayload } from './types';

export const showModal = (payload: ShowModalPayload) => {
    return {
        type: SHOW_MODAL,
        payload,
    };
};
export const closeModal = () => ({ type: CLOSE_MODAL });