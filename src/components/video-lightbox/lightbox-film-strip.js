import React from "react";
import YtLite from "../yt-lite";
import styled from "@emotion/styled";

const LightboxFilmStrip = ({ setSelectedVideoIndex, youtubeVideos }) => {
  return (
    <FilmStripWrapper>
      {youtubeVideos.map(({ id, title, videoId }, i) => (
        <Thumbnail key={id}>
          <YtLite
            key={id}
            title={title}
            videoId={videoId}
            isThumbnail
            onClick={() => setSelectedVideoIndex(i)}
          />
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
  padding: var(--gap-xs) 0;

  & > div {
    margin-right: var(--gap-xs);
  }

  & > div:first-of-type {
    margin-left: var(--gap-xs);
  }
`;

const Thumbnail = styled.div`
  aspect-ratio: 16 / 9;
  height: 100%;
`;
