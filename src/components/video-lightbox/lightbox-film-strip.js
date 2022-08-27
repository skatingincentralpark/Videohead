import React from "react";
import YtLite from "../yt-lite";
import PortableText from "react-portable-text";
import styled from "@emotion/styled";

const LightboxFilmStrip = ({ youtubeVideos }) => {
  return (
    <FilmStripWrapper>
      {youtubeVideos.map(({ description, id, title, videoId }, i) => (
        <Thumbnail key={id}>
          {/* <Button onClick={() => setSelectedVideo(i)}>Select</Button> */}
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
  flex-grow: 1;
  background-color: red;
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 0.3rem 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  /* min-width: 200px; */
`;
