import { SCREENS } from "./screens";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: SCREENS,
  user: {
    name: string,
    color: string,
    letter: string
  }
};

export enum SomeActions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN",
  "LOGIN_USER" = "LOGIN_USER"
}

export interface XAction {
  action: SomeActions;
  payload: any
}

export type Actions = XAction;
