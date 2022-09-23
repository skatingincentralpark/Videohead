import styled from "@emotion/styled";
import PortableText from "react-portable-text";
import YtLite from "../yt-lite";
import LightboxFilmStrip from "./lightbox-film-strip";

const VideoLightbox = ({
  videos,
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  return (
    <>
      <CloseButton onClick={() => setLightboxOpen(false)}>Close</CloseButton>
      <Lightbox>
        <Flex hasDesc={!!videos[selectedVideoIndex].description}>
          <YtLite
            key={videos[selectedVideoIndex].id}
            title={videos[selectedVideoIndex].title}
            videoId={videos[selectedVideoIndex].videoId}
          />
          {videos[selectedVideoIndex].description && (
            <Description>
              <h1>{videos[selectedVideoIndex].title}</h1>
              <PortableText content={videos[selectedVideoIndex].description} />
            </Description>
          )}
        </Flex>
        <LightboxFilmStrip
          videos={videos}
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
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  margin: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:first-of-type {
    align-items: flex-end;
    margin: 0 auto;
    width: 100%;
    transition: width 1s ease;

    @media screen and (min-width: 700px) {
      width: clamp(45rem, 50vw + 4rem, 60rem);
    }
  }
  & > *:nth-of-type(2) {
    margin: 0 auto;
    height: 15%;
    width: 100%;
    transition: width 1s ease;

    @media screen and (min-width: 700px) {
      width: clamp(45rem, 50vw + 4rem, 60rem);
    }
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
