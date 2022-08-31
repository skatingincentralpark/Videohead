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
    <>
      <CloseButton onClick={() => setLightboxOpen(false)}>Close</CloseButton>
      <Lightbox>
        <Flex hasDesc={!!youtubeVideos[selectedVideoIndex].description}>
          <YtLite
            key={youtubeVideos[selectedVideoIndex].id}
            title={youtubeVideos[selectedVideoIndex].title}
            videoId={youtubeVideos[selectedVideoIndex].videoId}
          />
          {youtubeVideos[selectedVideoIndex].description && (
            <Description>
              <h1>{youtubeVideos[selectedVideoIndex].title}</h1>
              <PortableText
                content={youtubeVideos[selectedVideoIndex].description}
              />
            </Description>
          )}
        </Flex>
        <LightboxFilmStrip
          youtubeVideos={youtubeVideos}
          setSelectedVideoIndex={setSelectedVideoIndex}
        />
      </Lightbox>
    </>
  );
};

export default VideoLightbox;

const CloseButton = styled.button`
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  mix-blend-mode: exclusion;
  z-index: 6;
  text-align: right;
  cursor: pointer;
  padding: var(--header-padding-right);

  & * {
    color: white;
  }
`;

const Lightbox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  margin: auto;

  display: flex;
  flex-direction: column;

  & > *:first-of-type {
    flex-grow: 1;
    height: 50%;
    padding: 0 var(--gap-l);
  }
  & > *:nth-of-type(2) {
    flex-shrink: 0;
    height: 15%;
  }
`;

const Description = styled.div`
  overflow-y: auto;
  margin: var(--gap-l);
  padding: var(--gap-xs);
  border-radius: var(--gap-xs);
  color: white;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: var(--gap-l) 0;
  margin-top: ${({ hasDesc }) => !hasDesc && "var(--gap-6xl)"};

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
