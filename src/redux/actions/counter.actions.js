import { ActionTypes } from "../constants/action.types";

export const increaseCounter = () => {
    return ({
        type: ActionTypes.INCREASE_COUNTER,
    });
}

export const decreaseCounter = () => {
    return ({
        type: ActionTypes.DECREASE_COUNTER,
    });
}