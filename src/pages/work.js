import FutureImage from "next/future/image";
import { useState } from "react";
import { m } from "framer-motion";
import client from "../../client";
import styled from "@emotion/styled";
import VideoLightbox from "../components/video-lightbox";
import { slugToText } from "../lib/helpers";
import HeadSEO from "../components/head-seo";

const transientOptions = {
  shouldForwardProp: (propName) => !propName.startsWith("$"),
};

const WorkPage = ({ videos }) => {
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
            <VideoRow
              video={v}
              key={v.id}
              onClick={() => openLightbox(i)}
              priority={i < 3}
            />
          ))}
      </PageWrapper>
    </>
  );
};

export default WorkPage;

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
  padding-top: var(--gap-page-top);
  margin: auto;
  transition: padding 500ms ease-out;

  @media screen and (min-width: 760px) {
    padding-top: 0;
  }
`;

const VideoRow = ({
  video: {
    client = "",
    title = "",
    category = "",
    date = "",
    gifs = [],
    description = "",
    id = 0,
    source = "",
    videoId = 0,
  },
  priority = false,
  onClick = () => {},
}) => {
  if (!gifs) return null;

  const variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Row
      key={title}
      viewport={{ once: true, amount: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <Info
        line1={client}
        line2={title}
        line3={category}
        line4={date}
        mobile
        onClick={onClick}
      />
      {/* <Info line1={client} line2={title} left /> */}
      <GifGroup>
        {gifs?.map((x) => (
          <Gif
            image={x}
            key={x.url}
            onClick={onClick}
            numberOfImages={gifs.length}
            fallbackCaption={
              x.caption ||
              `GIF of ${title} by ${client} - ${slugToText(category)}`
            }
            priority={priority}
          />
        ))}
      </GifGroup>
      {/* <Info line1={category} line2={date} r /> */}
    </Row>
  );
};

const Row = styled(m.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  position: relative;
`;
const GifGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: width 1s ease;
  width: 100%;

  @media screen and (min-width: 700px) {
    /* width: clamp(30rem, 30vw + 4rem, 60rem); */
  }
`;

const Gif = ({
  image: {
    id = null,
    aspectRatio = 0,
    height = 0,
    lqip = "",
    palette = { dominant: { background: "" } },
    width = 0,
    url = "",
    caption = "",
    crop = {},
  },
  priority = false,
  onClick = () => {},
  fallbackCaption = "",
  numberOfImages = 1,
}) => {
  // Using values from Sanity's crop object, compute the resulting aspect ratio
  const cropWidth = crop && width - crop.left * width - crop.right * width;
  const cropHeight = crop && height - crop.top * height - crop.bottom * height;
  const croppedAspectRatio = crop && cropWidth / cropHeight;

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  return (
    <GifWrapper
      onClick={onClick}
      style={{
        backgroundColor: palette.dominant.background,
        aspectRatio: `${croppedAspectRatio || aspectRatio} / 1`,
      }}
      numberOfImages={numberOfImages}
    >
      <div />
      <FutureImage
        src={url}
        alt={caption || fallbackCaption}
        width={width}
        height={height}
        priority={priority}
        className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
        onLoadingComplete={doFadeIn}
      />
    </GifWrapper>
  );
};

const GifWrapper = styled.div`
  position: relative;
  max-width: ${({ numberOfImages }) =>
    numberOfImages && `calc(100% / ${numberOfImages})`};
  flex-grow: 1;
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
    object-fit: cover;
    margin: auto;
    width: 100%;
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
  line3 = "",
  line4 = "",
  left = false,
  mobile = false,
  onClick = () => {},
}) => {
  return (
    <InfoMobile onClick={onClick}>
      <div>
        <div>{slugToText(line1)}</div>
        <div>{slugToText(line2)}</div>
      </div>
      <div>
        <span>{slugToText(line3)}</span>
        <span>{line4 || `1 June 2022`}</span>
      </div>
    </InfoMobile>
  );
};

const InfoTypography = styled.div`
  font-size: 1rem;
  line-height: 1.4em;

  & > div:first-of-type {
    display: flex;
    justify-content: center;

    @media screen and (min-width: 760px) {
      display: block;
    }

    & > div:first-of-type {
      font-weight: 600;
    }

    & > div:last-of-type {
      font-weight: 400;
      margin-left: var(--gap-xxs);

      @media screen and (min-width: 760px) {
        margin-left: 0;
      }
    }
  }
`;

const InfoMobile = styled(InfoTypography)`
  text-align: center;
  position: absolute;
  bottom: var(--gap-xxs);
  z-index: 1;
  display: block;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;

  @media screen and (min-width: 760px) {
    bottom: 1rem;
  }

  & > div:last-of-type {
    color: rgba(255, 255, 255, 1);
    font-size: 0.7rem;
    font-weight: 300;

    @media screen and (min-width: 760px) {
      margin-top: var(--gap-xxs);
    }

    & > span:last-of-type {
      margin-left: var(--gap-xxs);
    }
  }
`;
