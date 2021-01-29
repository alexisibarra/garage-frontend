import { combineReducers } from "redux";

export interface IState {
  starred: {
    [key: number]: boolean;
  };
}

const initState = {
  starred: {},
};

export const toggleStar = (id: number) => ({ id, type: "TOGGLE_STAR" });

const star = (state: IState = initState, action: any) => {
  switch (action.type) {
    case "TOGGLE_STAR":
      return {
        ...state,
        starred: {
          ...state.starred,
          [action.id]: !state.starred[action.id],
        },
      };
    default:
      return state;
  }
};

export default star;
