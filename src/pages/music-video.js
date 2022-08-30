import styled from "@emotion/styled";
import YtLite from "../components/yt-lite";
import VideoLightbox from "../components/video-lightbox";
import client from "../../client";
import { useState } from "react";
import HeadSEO from "../components/head-seo";

const MusicVideoPage = ({ youtubeVideos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedVideoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <HeadSEO title="Music Video" />
      <PageWrapper>
        {lightboxOpen && (
          <VideoLightbox
            youtubeVideos={youtubeVideos}
            selectedVideoIndex={selectedVideoIndex}
            setSelectedVideoIndex={setSelectedVideoIndex}
            setLightboxOpen={setLightboxOpen}
          />
        )}
        <VideoWrapper>
          {youtubeVideos.map(({ id, title, videoId }, i) => (
            <YtLite
              key={id}
              title={title}
              videoId={videoId}
              isThumbnail
              onClick={() => openLightbox(i)}
              poster="maxresdefault"
            />
          ))}
        </VideoWrapper>
      </PageWrapper>
    </>
  );
};

export default MusicVideoPage;

const PageWrapper = styled.div`
  padding: var(--gap-6xl) var(--gap-l) var(--gap-l) var(--gap-l);
`;

const VideoWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-s);

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export async function getStaticProps() {
  const youtubeVideos = await client.fetch(`
    *[_type == "youtubeVideo"][]{
      "id": _id,
      title,
      videoId,
      description
    }
  `);

  return {
    props: {
      youtubeVideos,
    },
  };
}
