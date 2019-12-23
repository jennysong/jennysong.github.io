import { SELECT_HEADER_MENU } from '../constants/action-types'

export function selectHeaderMenu(menuName) {
    return { 
        type: SELECT_HEADER_MENU,
        headerMenu: menuName
    }
}