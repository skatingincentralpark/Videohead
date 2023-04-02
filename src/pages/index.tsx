import { useRef, useState } from "react";
import styled from "@emotion/styled";
import client from "../../client";
import HeadSEO from "../components/head-seo";
import { GetStaticProps } from "next";

export interface Props {
  landingVideo: { asset: Asset; caption: string };
}

export interface Asset {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  assetId: string;
  extension: string;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
}

const HomePage = ({ landingVideo }: Props) => {
  const {
    asset: { url },
  } = landingVideo;
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(
    ref.current?.paused || true
  );

  const handlePlayVideo = () => {
    if (!ref.current) return;

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
      <PageWrapper onClick={handlePlayVideo}>
        <FeaturedVideo>
          <video autoPlay playsInline muted loop ref={ref}>
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
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = await client.fetch(`
    *[_type == "siteSettings"]{
      landingVideo {
        caption,     
        asset ->
      }
    }
  `);

  return {
    props: {
      landingVideo: query[0].landingVideo,
    },
  };
};
