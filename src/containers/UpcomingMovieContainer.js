import React from "react";
import { connect } from "react-redux";
import UpcomingMovie from "../components/UpcomingMovie";
import { getUpcoming } from "../modules/movie";
import useApi from "../hooks/useApi";

const UpcomingMovieContainer = ({ getUpcoming, upcoming, loading }) => {
  useApi(getUpcoming);
  return <UpcomingMovie upcoming={upcoming} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    upcoming: movie.upcoming,
    loading: loading["movie/GET_UPCOMING"],
  }),
  { getUpcoming }
)(UpcomingMovieContainer);
