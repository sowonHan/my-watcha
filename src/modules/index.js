// rootReducer와 rootSaga 들어갈 곳
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import movie, { movieSaga } from "./movie";

const rootReducer = combineReducers({
  movie,
  loading,
});

export function* rootSaga() {
  yield all([movieSaga()]);
}

export default rootReducer;
