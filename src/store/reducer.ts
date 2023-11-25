import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (action: Actions, clone: AppState): AppState => {
    switch (action.action) {
        case SomeActions.CHANGE_SCREEN:
            return {
                ...clone,
                screen: action.payload
            }
        case SomeActions.LOGIN_USER:
            console.log(action.payload)
            return {
                ...clone,
                user: action.payload
            }
        default:
            return {
                ...clone
            }
    }
}