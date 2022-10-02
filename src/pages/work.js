import FutureImage from "next/future/image";
import { useState } from "react";
import { m } from "framer-motion";
import client from "../../client";
import styled from "@emotion/styled";
import VideoLightbox from "../components/video-lightbox";
import { slugToText } from "../lib/helpers";
import HeadSEO from "../components/head-seo";

const HomePOC = ({ videos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedVideoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <HeadSEO title="Work" />
      <PageWrapper>
        {lightboxOpen && (
          <VideoLightbox
            videos={videos}
            selectedVideoIndex={selectedVideoIndex}
            setSelectedVideoIndex={setSelectedVideoIndex}
            setLightboxOpen={setLightboxOpen}
          />
        )}
        {videos &&
          videos.map((v, i) => (
            <VideoRow video={v} key={v.id} onClick={() => openLightbox(i)} />
          ))}
        {videos &&
          videos.map((v, i) => (
            <VideoRow video={v} key={v.id} onClick={() => openLightbox(i)} />
          ))}
        {videos &&
          videos.map((v, i) => (
            <VideoRow video={v} key={v.id} onClick={() => openLightbox(i)} />
          ))}
        {videos &&
          videos.map((v, i) => (
            <VideoRow video={v} key={v.id} onClick={() => openLightbox(i)} />
          ))}
      </PageWrapper>
    </>
  );
};

export default HomePOC;

export async function getStaticProps() {
  const videos = await client.fetch(`
  *[_type == "musicVideo"][]{
    "id": _id,
    title,
    videoId,
    description,
    date,
      category,
      client,
      source,
      gifs[]{
        caption,
          "url": asset -> url,
          "height": asset -> metadata.dimensions.height,
          "width": asset -> metadata.dimensions.width,
          "aspectRatio": asset -> metadata.dimensions.aspectRatio,
          "lqip": asset -> metadata.lqip,
          "palette": asset -> metadata.palette
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
  padding-top: var(--gap-page-top);
  margin: auto;
`;

const VideoRow = ({ video, onClick }) => {
  const {
    client = "",
    title = "",
    category = "",
    date = "",
    gifs = [],
    description = "",
    id = 0,
    source = "",
    videoId = 0,
  } = video || {};

  if (!gifs) return null;

  const variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Row
      key={title}
      viewport={{ once: false, amount: 0.9 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <Info line1={client} line2={title} mobile onClick={onClick} />
      <Info line1={client} line2={title} l />
      <GifGroup>
        {gifs?.map((x) => (
          <Gif image={x} key={x.url} onClick={onClick} />
        ))}
      </GifGroup>
      <Info line1={category} line2={date} r />
    </Row>
  );
};

const Row = styled(m.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;
const GifGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  transition: width 1s ease;

  @media screen and (min-width: 700px) {
    width: clamp(30rem, 30vw + 4rem, 60rem);
  }
`;

const Gif = ({ image, onClick }) => {
  const {
    aspectRatio = 0,
    height = 0,
    lqip = "",
    palette = { dominant: { background: "" } },
    width = 0,
    url = "",
    caption = "",
  } = image || {};

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  return (
    <GifWrapper
      onClick={onClick}
      style={{
        backgroundColor: palette.dominant.background,
        aspectRatio: `${aspectRatio} / 1`,
      }}
    >
      <div />
      <FutureImage
        src={url}
        alt={caption}
        width={width}
        height={height}
        className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
        onLoadingComplete={doFadeIn}
      />
    </GifWrapper>
  );
};

const GifWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: crosshair;

  & > div {
    width: 100%;
    height: 0;
    background-color: magenta;
    position: absolute;
    z-index: 1;
    transition: height 100ms ease;
    bottom: 0;
  }

  &:hover div {
    @media screen and (min-width: 700px) {
      height: 3px;
    }
  }
  &:active div {
    height: 3px;
    background-color: blue;
  }
  & > img {
    height: 100%;
  }

  .transparent {
    opacity: 0%;
    transition: opacity 1000ms ease;
  }
  .hasLoaded {
    opacity: 100%;
  }
`;

const Info = ({
  line1 = "",
  line2 = "",
  l = false,
  r = false,
  mobile = false,
  onClick = () => {},
}) => {
  return (
    <>
      {!mobile ? (
        <InfoDesktop l={l} r={r}>
          <div>{slugToText(line1)}</div>
          <div>{slugToText(line2)}</div>
        </InfoDesktop>
      ) : (
        <InfoMobile onClick={onClick}>
          <div>{slugToText(line1)}</div>
          <div>{slugToText(line2)}</div>
        </InfoMobile>
      )}
    </>
  );
};

const InfoTypography = styled.div`
  font-size: 0.9rem;
  line-height: 1.2em;

  & > div:first-of-type {
    font-weight: 600;
    font-style: oblique;
  }

  & > div:last-of-type {
    font-style: oblique;
    color: var(--secondary-color);
    font-weight: 400;
  }
`;

const InfoDesktop = styled(InfoTypography)`
  text-align: ${({ r }) => (r ? "left" : "right")};
  min-width: 12rem;
  padding: 0 var(--gap-m);
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

const InfoMobile = styled(InfoTypography)`
  text-align: center;
  position: absolute;
  z-index: 1;
  display: block;
  padding: var(--gap-xs);
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  @media screen and (min-width: 700px) {
    display: none;
  }

  & > div:last-of-type {
    color: rgba(255, 255, 255, 1);
  }
`;

const Bio = () => {
  return (
    <BioWrapper>
      <div>Raghav Rampal</div>
      <div>
        Director / Founder
        <br />
        raghav@videohead.com.au
        <br />
        +61 423 371 400
      </div>
      <div>
        Videohead is a video production company based in Sydney, Australia. We
        tell stories of some of Australia&apos;s most exciting creatives
      </div>
    </BioWrapper>
  );
};
const BioWrapper = styled.div`
  font-weight: 600;
  width: 100%;
  margin: var(--gap-l) auto 0 auto;
  padding: 0 var(--gap-s) var(--gap-3xl) var(--gap-s);

  font-size: 0.9rem;
  line-height: 1.2em;
  color: var(--secondary-color);
  font-weight: 300;
  transition: width 1s ease;

  & > div:first-of-type {
    margin-bottom: 0.6em;
  }
  & > div:nth-of-type(2) {
    line-height: 1.4em;
    margin-bottom: 1em;
  }
  & > div:nth-of-type(3) {
    font-weight: 400;
    line-height: 1.4em;
    font-style: oblique;
  }

  @media screen and (min-width: 700px) {
    width: clamp(30rem, 30vw + 4rem, 60rem);
    padding: 0 0 var(--gap-3xl) 0;
  }
`;
