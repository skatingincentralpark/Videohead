import styled from "@emotion/styled";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const YtLite = ({ videoId, title }) => {
  return (
    <YtLiteWrapper>
      <LiteYouTubeEmbed id={videoId} title={title} />
    </YtLiteWrapper>
  );
};

export default YtLite;

const YtLiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .yt-lite {
    background-color: #000;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    aspect-ratio: 16 / 9;
  }

  .yt-lite > iframe {
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  /* play button */
  .yt-lite > .lty-playbtn {
    width: 70px;
    height: 46px;
    /* width: clamp(3rem, 2.5vw, 10rem);
    height: clamp(3rem, 2.5vw, 5rem); */
    background-color: #212121;
    z-index: 1;
    opacity: 0.8;
    border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
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
