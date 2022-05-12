import React from "react";
import { connect } from "react-redux";
import LatestMovie from "../components/LatestMovie";
import { getLatest } from "../modules/movie";
import useApi from "../hooks/useApi";

const LatestMovieContainer = ({ getLatest, latest, loading }) => {
  useApi(getLatest);

  return <LatestMovie latest={latest} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    latest: movie.latest,
    loading: loading["movie/GET_LATEST"],
  }),
  { getLatest }
)(LatestMovieContainer);
