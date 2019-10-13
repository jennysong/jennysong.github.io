import { SHOW_HOME } from './constants/action-types'

export const initialState = {
    show: 'login'
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_HOME: 
            const newState = {
                show: 'home'
            }
            return newState
        default:
            return state
    }
}