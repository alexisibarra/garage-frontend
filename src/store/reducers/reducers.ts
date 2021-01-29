import { combineReducers } from "redux";

import cars, { IState as ICarsState } from "./cars.reducer";

import stars, { IState as IStarsState } from "./stars.reducer";

export interface IStoreState {
  cars: ICarsState;
  star: IStarsState;
}

export default combineReducers({
  cars,
  stars,
});
