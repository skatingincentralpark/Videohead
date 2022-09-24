import styled from "@emotion/styled";
import PortableText from "react-portable-text";
import YtLite from "../yt-lite";

const VideoLightbox = ({
  videos = [],
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  const closeLightbox = () => setLightboxOpen(false);
  const selecetedVideo = videos[selectedVideoIndex];
  const { url = "", aspectRatio = 0, palette = {} } = selecetedVideo?.gifs[0];
  const { client = "", title = "", description = [] } = selecetedVideo;

  return (
    <>
      <CloseButton onClick={closeLightbox}>Close</CloseButton>
      <Lightbox>
        <YtLite
          key={videos[selectedVideoIndex].id}
          title={title}
          videoId={videos[selectedVideoIndex].videoId}
          posterImage={url}
        />
        <Description>
          <div>
            <div>{client}</div>
            <div>{title}</div>
            {description && <PortableText content={description} />}
          </div>
        </Description>
      </Lightbox>
      <Backdrop onClick={closeLightbox} />
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  overflow: scroll;
  height: 100%;
  width: 100%;

  margin: auto;
  padding: var(--gap-xxl);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > div:first-of-type {
    padding-top: 10rem;
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;

const Description = styled.div`
  padding-top: var(--gap-l);
  border-radius: var(--gap-xs);
  color: white;
  display: flex;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 1rem;

    & div:first-of-type {
      font-weight: 600;
      font-style: oblique;
      margin-right: var(--gap-m);
    }

    & > div:nth-of-type(2) {
      font-style: oblique;
      font-weight: 400;
      margin-bottom: var(--gap-m);
    }
  }
`;
