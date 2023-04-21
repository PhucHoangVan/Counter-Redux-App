import { ActionTypes } from "../constants/action.types";

const initialState = {
    counter: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.INCREASE_COUNTER:
            return { counter: state.counter + 1 };
        case ActionTypes.DECREASE_COUNTER:
            return { counter: state.counter - 1 };
        default: return state; 
    }
}