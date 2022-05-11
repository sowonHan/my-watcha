import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const Mainpage = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>내용물</Container>
      </Main>
      <Footer />
    </>
  );
};
export default Mainpage;
