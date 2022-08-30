import styled from "@emotion/styled";
import { useState } from "react";
import Image from "next/image";
import VideoLightboxVimeo from "../components/video-lightbox-vimeo";
import HeadSEO from "../components/head-seo";

const FilmPage = ({ videos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedVideoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageWrapper>
      <HeadSEO title="Film" desc="Films by Videohead" />
      {lightboxOpen && (
        <VideoLightboxVimeo
          selectedVideoIndex={selectedVideoIndex}
          setSelectedVideoIndex={setSelectedVideoIndex}
          setLightboxOpen={setLightboxOpen}
          videos={videos}
        />
      )}
      <VideoWrapper>
        {videos.map(({ id, title, thumbnail }, i) => (
          <Thumbnail key={id} onClick={() => openLightbox(i)}>
            <TitleWrapper>{title}</TitleWrapper>
            <Image
              src={thumbnail}
              alt="Something"
              quality={100}
              layout="fill"
            />
          </Thumbnail>
        ))}
      </VideoWrapper>
    </PageWrapper>
  );
};

export default FilmPage;

const PageWrapper = styled.div`
  padding: var(--gap-6xl) var(--gap-l) var(--gap-l) var(--gap-l);
  height: 400px;
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

const TitleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  /* margin: var(--gap-s); */
  width: 100%;
  bottom: 0;
  left: 0;
  padding: var(--gap-xxs) var(--gap-xs);
  background-color: rgba(0, 0, 0, 0.5);
`;

const Thumbnail = styled.div`
  aspect-ratio: 16/9;
  position: relative;
  cursor: pointer;
  outline: 1px solid var(--ghost-white);
`;

const Button = styled.button`
  padding: 1rem;
  margin: 1rem 0;
  margin-right: 1rem;
  background: red;
  color: white;
`;

export async function getStaticProps() {
  const sanityVideoResponse = [{ id: "390907489", title: "LivingNonLiving" }];

  const videos = await Promise.all(
    sanityVideoResponse.map(async (x) => {
      const res = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${x.id}`
      );

      const data = await res.json();
      return { ...x, thumbnail: data.thumbnail_url };
    })
  );

  return {
    props: {
      videos,
    },
  };
}
