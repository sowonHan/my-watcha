// rootReducer와 rootSaga 들어갈 곳
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import movie, { movieSaga } from "./movie";
import movieDetail, { movieDetailSaga } from "./movieDetail";

const rootReducer = combineReducers({
  movie,
  movieDetail,
  loading,
});

export function* rootSaga() {
  yield all([movieSaga(), movieDetailSaga()]);
}

export default rootReducer;
