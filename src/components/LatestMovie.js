import React, { useMemo } from "react";
import styled from "styled-components";
import Card from "./card/Card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestMovie = ({ latest, loading }) => {
  // 년도만 가져오기
  const getYear = (release_date) => release_date.split("-")[0] || "";

  // 포스터가 없을 때 기본 이미지를 출력하게 하는 함수
  const poster = useMemo(() => {
    if (latest) {
      if (!latest.poster_path) {
        return `/no_image.png`;
      } else {
        return `${process.env.REACT_APP_IMAGE_PREFIX}/${latest.poster_path}`;
      }
    }
  }, [latest]);

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {loading ? (
        <div>Loading...</div>
      ) : (
        latest && (
          <Card
            key={latest.id}
            linkUrl={`/movie/${latest.id}`}
            title={latest.title}
            posterPath={poster}
            voteAverage={latest.vote_average}
            year={getYear(latest.release_date)}
          />
        )
      )}
    </Base>
  );
};

export default LatestMovie;
