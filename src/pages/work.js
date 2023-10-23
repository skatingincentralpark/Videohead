import { useEffect, useState } from "react";
import client from "../../client";
import styled from "@emotion/styled";
import HeadSEO from "../components/head-seo";
import LightboxSwitcher from "../components/video-lightbox/lightbox-switcher";
import { useMediaQuery } from "react-responsive";
import VideoRow from "../components/video-row";
import { useInView } from "react-intersection-observer";
import useDebounce from "../hooks/useDebounce";

const transientOptions = {
  shouldForwardProp: (propName) => !propName.startsWith("$"),
};

const WorkPage = ({ videos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [amountOfProjectsToRender, setAmountOfProjectsToRender] = useState(5);

  const openLightbox = (index) => {
    setSelectedVideoIndex(index);
    setLightboxOpen(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const { ref, inView } = useInView({
    rootMargin: "100px",
  });

  const debouncedHandleReachBottom = useDebounce(() => {
    if (videos.length <= amountOfProjectsToRender) return;
    void setAmountOfProjectsToRender(amountOfProjectsToRender + 5);
  }, 400);

  useEffect(() => {
    if (inView) debouncedHandleReachBottom();
  }, [inView]);

  const projectsToRender = videos.slice(0, amountOfProjectsToRender);

  return (
    <>
      <HeadSEO title="Work" />
      <PageWrapper>
        <div
          style={{
            zIndex: 100,
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            background: "red",
          }}
        >
          {inView ? "in view" : "not in view"}
        </div>
        {lightboxOpen && (
          <LightboxSwitcher
            type={videos[selectedVideoIndex]?.source}
            videos={videos}
            selectedVideoIndex={selectedVideoIndex}
            setSelectedVideoIndex={setSelectedVideoIndex}
            setLightboxOpen={setLightboxOpen}
          />
        )}
        {projectsToRender &&
          projectsToRender.map((v, i) => (
            <VideoRow
              video={v}
              key={v.id}
              onClick={() => openLightbox(i)}
              priority={i < 3}
              isMobile={isMobile}
            />
          ))}
        <div aria-hidden ref={ref} />
      </PageWrapper>
    </>
  );
};

export default WorkPage;

export async function getStaticProps() {
  const videos = await client.fetch(`
  *[_type == "video" && pagesToShowOn.videohead][] | order(orderRank asc){
      "id": _id,
      title,
      videoId,
      description,
      date,
      category,
      client,
      source,
      award {
        url,
        won,
        title
      },
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
