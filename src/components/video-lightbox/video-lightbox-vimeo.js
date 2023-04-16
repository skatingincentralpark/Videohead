import styled from "@emotion/styled";
import PortableText from "react-portable-text";
import Script from "next/script";
import { slugToText } from "../../lib/helpers";
import Logo from "../logo";

const VideoLightboxVimeo = ({
  videos,
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  const closeLightbox = () => setLightboxOpen(false);
  const selecetedVideo = videos[selectedVideoIndex];

  // TODO: Make gif the thumbnail
  // const { url = "", aspectRatio = 0, palette = {} } = selecetedVideo?.gifs[0];

  const {
    client = "",
    title = "",
    description = [],
    date = "",
    category = "",
    videoId = "",
  } = selecetedVideo;

  return (
    <>
      <HeaderWrapper>
        <div />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <CloseButton onClick={closeLightbox}>Close</CloseButton>
      </HeaderWrapper>

      <Lightbox>
        <VimeoWrapper>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?h=df5c483387`}
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
        </VimeoWrapper>
        <Description>
          <div>
            <div className="desc-client">{client}</div>
            <div className="desc-title">{title}</div>
            <div className="desc-date">{date}</div>
            <div className="desc-category">{slugToText(category)}</div>
          </div>
          <div>{description && <PortableText content={description} />}</div>
        </Description>
        <Script src="https://player.vimeo.com/api/player.js" />
      </Lightbox>
      <Backdrop onClick={closeLightbox} />
    </>
  );
};

export default VideoLightboxVimeo;

const HeaderWrapper = styled.div`
  z-index: 5;
  display: grid;
  grid-template-columns: 4fr 15rem 4fr;
  width: 100%;
  position: fixed;
  top: 0;
  height: 6rem;
  padding: 0 var(--gap-l);
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  color: var(--primary-color);
  text-align: right;
  cursor: pointer;

  padding: 0 var(--gap-xxs);
  border-radius: 0.25rem;
  width: fit-content;
  height: fit-content;
  justify-self: end;
  align-self: center;
  transition: background-color 100ms ease, color 100ms ease;

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: white;
      color: black;
    }
  }

  &:active {
    background-color: darkgray;
    color: black;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  overflow-y: auto;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  transition: width 1s ease;

  @media screen and (min-width: 1600px) {
    width: clamp(50vw, 70vw + 4rem, 80vw);
  }

  margin: auto;
  padding: var(--gap-l);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 2rem;

  & > div:first-of-type {
    margin-top: 10rem;
  }
`;

const VimeoWrapper = styled.div`
  height: 80%;
  position: relative;
`;

const Description = styled.div`
  padding-top: var(--gap-3xl);
  border-radius: var(--gap-xs);
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  & > div:first-of-type {
    margin-bottom: var(--gap-s);
    font-weight: 400;

    & .desc-client {
      font-weight: 600;
    }
    & .desc-title {
    }
    & .desc-date {
    }
    & .desc-category {
    }
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;
