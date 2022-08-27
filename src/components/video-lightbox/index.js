import styled from "@emotion/styled";
import PortableText from "react-portable-text";
import YtLite from "../yt-lite";
import LightboxFilmStrip from "./lightbox-film-strip";

const VideoLightbox = ({
  youtubeVideos,
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  return (
    <Lightbox>
      <Flex>
        <YtLite
          key={youtubeVideos[selectedVideoIndex].id}
          title={youtubeVideos[selectedVideoIndex].title}
          videoId={youtubeVideos[selectedVideoIndex].videoId}
        />
        <Description>
          <Button onClick={() => setLightboxOpen(false)}>Close Lightbox</Button>
          <h1>{youtubeVideos[selectedVideoIndex].title}</h1>
          <PortableText
            content={youtubeVideos[selectedVideoIndex].description}
          />
        </Description>
      </Flex>
      <LightboxFilmStrip
        youtubeVideos={youtubeVideos}
        setSelectedVideoIndex={setSelectedVideoIndex}
      />
    </Lightbox>
  );
};

export default VideoLightbox;

const Lightbox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  margin: auto;

  display: flex;
  flex-direction: column;

  & > *:first-of-type {
    flex-grow: 1;
    height: 50%;
  }
  & > *:nth-of-type(2) {
    flex-shrink: 0;
    height: 15%;
  }
`;

const Description = styled.div`
  overflow-y: auto;
  margin: var(--gap-l);
  background-color: #f4f4f4;
  padding: var(--gap-xs);
  border-radius: var(--gap-xs);
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 3px solid purple;

  & > *:first-of-type {
    height: 100%;
    width: 100%;
  }

  & > *:nth-of-type(2) {
    width: 500px;
    flex-grow: 1;
    height: calc(80% - var(--gap-l) * 2);
  }
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 0.3rem 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  width: 100%;
`;
