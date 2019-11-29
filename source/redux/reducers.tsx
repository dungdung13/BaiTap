import { combineReducers } from 'redux';
import { TOGGLE_VISIBILITY } from './actions';

export const toggleVisibility = (state = false, action: any) => {
    switch (action.type) {
        case TOGGLE_VISIBILITY:
            return action.isVisible

        default:
            return state
    }
}

const myAppReducer = combineReducers({
    toggleVisibility
})

export default myAppReducer