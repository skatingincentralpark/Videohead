import { useRef, useState } from "react";
import styled from "@emotion/styled";
import client from "../../client";
import HeadSEO from "../components/head-seo";

const HomePage = ({ landingVideo }) => {
  const { url } = landingVideo;
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(ref.current?.paused || true);

  const handlePlayVideo = () => {
    if (ref.current.paused) {
      ref.current.play();
      setIsPlaying(true);
    } else {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <HeadSEO title="Home" />
      <PageWrapper>
        <PlayPauseButton onClick={handlePlayVideo}>
          {isPlaying ? "Pause" : "Play"}
        </PlayPauseButton>
        <FeaturedVideo>
          <video autoPlay playsInline muted loop type="video/mp4" ref={ref}>
            <source src={url} />
          </video>
        </FeaturedVideo>
      </PageWrapper>
    </>
  );
};

export default HomePage;

const PageWrapper = styled.div`
  padding: var(--gap-3xl);
  height: 100%;
`;

const FeaturedVideo = styled.div`
  width: calc(100vw + 4px);
  height: calc(100vh + 4px);
  top: -2px;
  left: -2px;
  position: fixed;
  z-index: -1;

  & > video {
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    object-fit: cover;
    box-sizing: border-box;
  }
`;

const PlayPauseButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
`;

export async function getStaticProps() {
  const query = await client.fetch(`
    *[_type == "siteSettings"][]{
      landingVideo {
        "url": asset -> url
      } 
    }
  `);

  return {
    props: {
      landingVideo: query[0].landingVideo,
    },
  };
}
