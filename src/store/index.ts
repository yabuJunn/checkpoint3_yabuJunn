import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";
import { SCREENS } from "../types/screens";

export let state: AppState = {
  screen: SCREENS.LOGIN_SCREEN,
  user: {
    name: "",
    color: "",
    letter: ""
  }
};

// export let appState = Storage.get<AppState>({
//   key: PersistanceKeys.STORE,
//   defaultValue: emptyState,
// });

let observers: Observer[] = [];

// const persistStore = (state: AppState) =>
//   Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => {observers.forEach((o) => o.render())};

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(state));
  const newState = reducer(action, clone);
  state = newState;
  console.log(state)

  // persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};
