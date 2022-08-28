import Script from "next/script";
import styled from "@emotion/styled";
// import PortableText from "react-portable-text";
// import LightboxFilmStrip from "./lightbox-film-strip";

const VideoLightboxVimeo = ({
  videos,
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  return (
    <>
      <CloseButton onClick={() => setLightboxOpen(false)}>Close</CloseButton>
      <Lightbox>
        <Flex>
          <div style={{ height: "100%", position: "relative" }}>
            <iframe
              src={`https://player.vimeo.com/video/${videos[selectedVideoIndex].id}?h=df5c483387`}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" />
        </Flex>
      </Lightbox>
    </>
  );
};

export default VideoLightboxVimeo;

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
