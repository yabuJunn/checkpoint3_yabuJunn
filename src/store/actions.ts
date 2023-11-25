import { Actions, SomeActions, XAction } from "../types/store";

export const changeScreen: any = (payload: string) => {
    return {
        action: SomeActions.CHANGE_SCREEN,
        payload: payload
    }
}

export const loginUser: any = (userName: string, userColor: string, userLetter: string) => {
    return {
        action: SomeActions.LOGIN_USER,
        payload: {
            name: userName,
            color: userColor,
            letter: userLetter
        }
    }
}