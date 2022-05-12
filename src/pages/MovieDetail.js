import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Base = styled.div`
  position: relative;
  background: #f8f8f8;
`;

const MovieDetail = () => {
  return (
    <Base>
      <Header />
      <Footer />
    </Base>
  );
};
export default MovieDetail;
