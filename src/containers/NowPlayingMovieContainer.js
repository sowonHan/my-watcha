import React from "react";
import { connect } from "react-redux";
import NowPlayingMovie from "../components/NowPlayingMovie";
import { getNowPlaying } from "../modules/movie";
import useApi from "../hooks/useApi";

const NowPlayingMovieContainer = ({ getNowPlaying, nowPlaying, loading }) => {
  useApi(getNowPlaying);
  return <NowPlayingMovie nowPlaying={nowPlaying} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    nowPlaying: movie.nowPlaying,
    loading: loading["movie/GET_NOWPLAYING"],
  }),
  {
    getNowPlaying,
  }
)(NowPlayingMovieContainer);
