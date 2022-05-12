import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
import { getDetail } from "../modules/movieDetail";
import useApi from "../hooks/useApi";

const DetailMovieContainer = ({ getDetail, detail, loading }) => {
  const { id } = useParams();
  useApi(getDetail, id);

  return <DetailMovie detail={detail} loading={loading} />;
};

export default connect(
  ({ movieDetail, loading }) => ({
    detail: movieDetail.detail,
    loading: loading["movieDatail/GET_DETAIL"],
  }),
  { getDetail }
)(DetailMovieContainer);
