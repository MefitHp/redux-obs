import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

const API = "https://api.punkapi.com/v2/beers";

//PATITOS
const LOAD_BEERS = "modules/beers/LOAD_BEERS";
const LOAD_BEERS_SUCCESS = "modules/beers/LOAD_BEERS_SUCCESS";
const SET_STATUS = "modules/beers/SET_STATUS";

const initState = {
  data: [],
  status: "idle" //idle | pending | success | failure
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOAD_BEERS:
      return {};
    case LOAD_BEERS_SUCCESS:
      return {};
    default:
      return state;
  }
}

//Action Creators
export function loadBeers() {
  return {
    type: LOAD_BEERS
  };
}

export function loadBeersSuccess(beers) {
  return {
    type: LOAD_BEERS_SUCCESS,
    payload: beers
  };
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status
  };
}

//Epics
export function loadBeersEpic(action$) {
  return action$.pipe(
    ofType(LOAD_BEERS),
    mergeMap(action =>
      ajax.getJSON(API).pipe(
        map(resp => {
          console.log(resp);
          return loadBeersSuccess(resp);
        })
      )
    )
  );
}
