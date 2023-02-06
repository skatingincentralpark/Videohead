import FutureImage from "next/future/image";
import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { slugToText } from "../lib/helpers";
import styled from "@emotion/styled";

const transientOptions = {
  shouldForwardProp: (propName) => !propName.startsWith("$"),
};

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
    award = {},
  },
  priority = false,
  onClick = () => {},
  isMobile = false,
}) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

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

  const awardText = award?.title && award?.title;
  const awardUrl = award?.won && award?.url;

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
        line3={awardText}
        awardUrl={awardUrl}
        mobile
        onClick={onClick}
      />
      <Info
        line1={client}
        line2={title}
        line3={awardText}
        awardUrl={awardUrl}
        left
        onClick={onClick}
      />
      {hydrated && (
        <GifGroup>
          {/* if desktop, render all gifs, otherwise, render first only */}
          {!isMobile
            ? gifs?.map((x, i) => (
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
              ))
            : gifs?.map((x, i) => {
                if (i === 0)
                  return (
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
                  );
              })}
        </GifGroup>
      )}
      <Info line1={category} line2={date} onClick={onClick} />
    </Row>
  );
};

export default VideoRow;

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
    /* width: clamp(30rem, 80vw + 4rem, 100rem); */
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
  max-width: 100%;
  flex-grow: 1;
  cursor: crosshair;

  @media screen and (min-width: 700px) {
    max-width: ${({ numberOfImages }) =>
      numberOfImages && `calc(100% / ${numberOfImages})`};
  }

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
  awardUrl = "",
  left = false,
  mobile = false,
  onClick = () => {},
}) => {
  return (
    <>
      {!mobile ? (
        <InfoDesktop $left={left}>
          <div>{slugToText(line1)}</div>
          <div>{slugToText(line2)}</div>
          {line3 && (
            <AwardWonText>
              <a href={awardUrl} target="_blank" rel="noopener noreferrer">
                {slugToText(line3)}
              </a>
            </AwardWonText>
          )}
        </InfoDesktop>
      ) : (
        <InfoMobile onClick={onClick}>
          <div>{slugToText(line1)}</div>
          <div>{slugToText(line2)}</div>
          {line3 && (
            <AwardWonText>
              <a href={awardUrl} target="_blank" rel="noopener noreferrer">
                {slugToText(line3)}
              </a>
            </AwardWonText>
          )}
        </InfoMobile>
      )}
    </>
  );
};

const InfoTypography = styled.div`
  font-size: 0.9rem;
  line-height: 1.3em;

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

const InfoDesktop = styled(InfoTypography, transientOptions)`
  text-align: ${({ $left }) => ($left ? "right" : "left")};
  width: 14rem;
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
  bottom: 0;
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

const AwardWonText = styled.div`
  background-color: red;
  width: fit-content;
  margin-left: auto;
  padding: 0.4rem 0.5rem;
  margin-top: 0.5rem;

  a {
    color: white;
  }
`;
