import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

// You can add multiple reducer and use combineReducers to combine them
const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer;
