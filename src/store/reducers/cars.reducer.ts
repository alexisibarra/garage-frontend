import { AxiosResponse } from "axios";
import {
  getObjectByIdFromArray,
  IObjectById,
} from "../../getObjectByIdFromArray";

import { TDispatch } from "../../interfaces/IDispatch";
import { getAllCars } from "../../services/api";

interface IMaker {
  id: number;
  name: string;
}

interface IImage {
  id: number;
  url: string;
}

export interface ICar {
  createdAt: string;
  id: number;
  image?: IImage;
  imageId: number;
  maker: IMaker;
  makerId: number;
  model: string;
  updatedAt: string;
  year: number;
}

export type IState = {
  all: IObjectById<ICar>;
};

const initialState: IState = {
  all: {},
};

// ACTIONS

const SET_ALL = "CARS:SET_ALL";

interface IGetAllAction {
  type: typeof SET_ALL;
  payload: IObjectById<ICar>;
}

type TAction = IGetAllAction;

// ACTION CREATORS

type TSetAllActionCreator = (cars: IObjectById<ICar>) => IGetAllAction;

const setAllActionCreator: TSetAllActionCreator = (cars) => ({
  type: SET_ALL,
  payload: cars,
});

// THUNKS

type TGetAllThunk = (dispatch: TDispatch<IGetAllAction>) => () => void;

export const getAllThunk: TGetAllThunk = (dispatch) => () => {
  getAllCars()
    .then((response: AxiosResponse<ICar[]>) =>
      dispatch(setAllActionCreator(getObjectByIdFromArray(response.data)))
    )
    .catch(() => []);
};

// REDUCER

type IReducer = (state: IState | undefined, action: TAction) => any;

export const reducer: IReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case SET_ALL: {
      return {
        ...state,
        all: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
