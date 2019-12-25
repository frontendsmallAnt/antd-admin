import { SWITCH_MENU } from "./action"

export function reducer(state = { menuName: "" }, action) {
    switch (action.type) {
        case SWITCH_MENU:
            return {
                menuName:action.menuName
            }
        default:
            return state
    }
}