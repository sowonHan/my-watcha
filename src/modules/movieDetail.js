import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입
const GET_DETAIL = "movieDetail/GET_DETAIL";
const GET_DETAIL_SUCCESS = "movieDetail/GET_DETAIL_SUCCESS";

const GET_SIMILAR = "movieDetail/GET_SIMILAR";
const GET_SIMILAR_SUCCESS = "movieDetail/GET_SIMILAR_SUCCESS";

// 액션 생성 함수
export const getDetail = createAction(GET_DETAIL, (id) => id);
export const getSimilar = createAction(GET_SIMILAR, (id) => id);

// saga 함수
const getDetailSaga = createRequestSaga(GET_DETAIL, api.getDetail);
const getSimilarSaga = createRequestSaga(GET_SIMILAR, api.getSimilar);

export function* movieDetailSaga() {
  yield takeLatest(GET_DETAIL, getDetailSaga);
  yield takeLatest(GET_SIMILAR, getSimilarSaga);
}

// 초기화 데이터, 리듀서
const initialState = {
  detail: null,
  similar: null,
};

const movieDetail = handleActions(
  {
    [GET_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      detail: action.payload,
    }),
    [GET_SIMILAR_SUCCESS]: (state, action) => ({
      ...state,
      similar: action.payload,
    }),
  },
  initialState
);

export default movieDetail;
