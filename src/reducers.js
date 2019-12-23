import { SELECT_HEADER_MENU } from './constants/action-types'

export const initialState = {
    selectedHeader: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_HEADER_MENU: 
            const newState = {
                selectedHeader: action.headerMenu
            }
            return newState
        default:
            return state
    }
}