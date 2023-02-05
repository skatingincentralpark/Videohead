import { useState } from "react";
import client from "../../client";
import styled from "@emotion/styled";
import HeadSEO from "../components/head-seo";
import LightboxSwitcher from "../components/video-lightbox/lightbox-switcher";
import { useMediaQuery } from "react-responsive";
import VideoRow from "../components/video-row";

const PersonalWork = ({ videos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedVideoIndex(index);
    setLightboxOpen(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <>
      <HeadSEO title="Work" />
      <PageWrapper>
        {lightboxOpen && (
          <LightboxSwitcher
            type={videos[selectedVideoIndex]?.source}
            videos={videos}
            selectedVideoIndex={selectedVideoIndex}
            setSelectedVideoIndex={setSelectedVideoIndex}
            setLightboxOpen={setLightboxOpen}
          />
        )}
        {videos &&
          videos.map((v, i) => (
            <VideoRow
              video={v}
              key={v.id}
              onClick={() => openLightbox(i)}
              priority={i < 3}
              isMobile={isMobile}
            />
          ))}
        {!videos.length && (
          <div style={{ width: "100%", textAlign: "center" }}>Coming soon</div>
        )}
      </PageWrapper>
    </>
  );
};

export default PersonalWork;

export async function getStaticProps() {
  const videos = await client.fetch(`
  *[_type == "video" && category == "personal"][] | order(orderRank asc){
      "id": _id,
      title,
      videoId,
      description,
      date,
      category,
      client,
      source,
      award,
      gifs[]{
        "id": asset -> _id,
        caption,
        "url": asset -> url,
        "height": asset -> metadata.dimensions.height,
        "width": asset -> metadata.dimensions.width,
        "aspectRatio": asset -> metadata.dimensions.aspectRatio,
        "lqip": asset -> metadata.lqip,
        "palette": asset -> metadata.palette,
        "crop": crop 
      },
    }
`);
  return {
    props: {
      videos,
    },
  };
}

const PageWrapper = styled.div`
  margin: auto;
  transition: padding 500ms ease-out;

  @media screen and (min-width: 760px) {
    padding: var(--gap-page-top) 0;
  }
`;
