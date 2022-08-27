import React from "react";
import YtLite from "../yt-lite";
import styled from "@emotion/styled";

const LightboxFilmStrip = ({ setSelectedVideoIndex, youtubeVideos }) => {
  return (
    <FilmStripWrapper>
      {youtubeVideos.map(({ id, title, videoId }, i) => (
        <Thumbnail key={id}>
          {/* <Button onClick={() => setSelectedVideoIndex(i)}>Select</Button> */}
          <YtLite key={id} title={title} videoId={videoId} />
        </Thumbnail>
      ))}
    </FilmStripWrapper>
  );
};

export default LightboxFilmStrip;

const FilmStripWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  background-color: lightgoldenrodyellow;
  border: 3px solid red;
  padding: var(--gap-xs) 0;

  & > div {
    padding-right: var(--gap-xs);
  }

  & > div:first-of-type {
    margin-left: var(--gap-xs);
  }
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 0.3rem 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  height: 100%;
  aspect-ratio: 16 / 9;
`;
