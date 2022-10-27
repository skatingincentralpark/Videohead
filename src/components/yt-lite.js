import styled from "@emotion/styled";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const YtLite = ({
  videoId,
  title,
  isThumbnail,
  onClick = null,
  posterImage = "",
}) => {
  return (
    <YtLiteWrapper
      onClick={onClick}
      isThumbnail={isThumbnail}
      backgroundImage={`url(${posterImage})`}
    >
      {isThumbnail && <ClickBlocker />}
      <LiteYouTubeEmbed id={videoId} title={title} />
    </YtLiteWrapper>
  );
};

export default YtLite;

const YtLiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .yt-lite {
    background-color: #000;
    display: block;
    contain: content;
    background-image: ${({ backgroundImage }) =>
      backgroundImage && backgroundImage} !important;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    aspect-ratio: 16 / 9;
    aspect-ratio: 11 / 4;
  }

  .yt-lite > iframe {
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  /* play button */
  .yt-lite > .lty-playbtn {
    width: 6rem;
    height: 3.8rem;
    /* width: clamp(3rem, 2.5vw, 10rem);
    height: clamp(3rem, 2.5vw, 5rem); */
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
    opacity: 0.8;
    border-radius: 0.75rem; /* TODO: Consider replacing this with YT's actual svg. Eh. */
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
    display: ${({ isThumbnail }) => isThumbnail && "none"};
  }
  .yt-lite:hover > .lty-playbtn {
    background-color: #f00;
    opacity: 1;
  }
  /* play button triangle */
  .yt-lite > .lty-playbtn:before {
    content: "";
    border-style: solid;
    border-width: 11px 0 11px 19px;
    border-color: transparent transparent transparent #fff;
  }

  .yt-lite > .lty-playbtn,
  .yt-lite > .lty-playbtn:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  /* Post-click styles */
  .yt-lite.lyt-activated {
    cursor: unset;
  }
  .yt-lite.lyt-activated::before,
  .yt-lite.lyt-activated > .lty-playbtn {
    opacity: 0;
    pointer-events: none;
  }
`;

// To prevent triggering iFrame opening
const ClickBlocker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
