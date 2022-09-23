import React from "react";
import YtLite from "../yt-lite";
import styled from "@emotion/styled";
import { slugToText } from "../../lib/helpers";

const LightboxFilmStrip = ({ setSelectedVideoIndex, videos }) => {
  return (
    <FilmStripWrapper>
      {videos.map((x, i) => (
        <Thumbnail key={i} video={x} onClick={() => setSelectedVideoIndex(i)} />
      ))}
      {videos.map((x, i) => (
        <Thumbnail
          key={`1 - ${i}`}
          video={x}
          onClick={() => setSelectedVideoIndex(i)}
        />
      ))}
    </FilmStripWrapper>
  );
};

export default LightboxFilmStrip;

const FilmStripWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  padding: var(--gap-xs) 0;

  & > div {
    margin-right: var(--gap-xs);
  }
`;

const Thumbnail = ({ video, onClick }) => {
  const {
    id = "",
    title = "",
    videoId = "",
    gifs = "",
    client = "",
    category = "",
    date = "",
  } = video || {};

  if (!gifs) return null;

  const {
    aspectRatio = 0,
    height = 0,
    lqip = "",
    palette = { dominant: { background: "" } },
    width = 0,
    url = "",
    caption = "",
  } = gifs[0];

  return (
    <ThumbnailWrapper
      onClick={onClick}
      key={id}
      style={{
        backgroundColor: palette.dominant.background,
        aspectRatio: `${aspectRatio} / 1`,
      }}
    >
      <div>
        <div>{client}</div>
        <div>{title}</div>
        <div>{date}</div>
        <small>{slugToText(category)}</small>
      </div>
      <img src={url} />
      {/* <YtLite
        key={id}
        title={title}
        videoId={videoId}
        isThumbnail
        onClick={onClick}
      /> */}
    </ThumbnailWrapper>
  );
};

const ThumbnailWrapper = styled.div`
  position: relative;
  cursor: crosshair;
  outline: 1px solid transparent;
  transition: outline 100ms, filter 100ms;
  height: 100%;

  & > div {
    position: absolute;
    padding: var(--gap-xxs);

    font-size: 0.9rem;
    line-height: 1.2em;

    & > div:first-of-type {
      font-weight: 600;
      font-style: oblique;
    }

    & > div:nth-of-type(2) {
      font-style: oblique;
      font-weight: 400;
    }

    & > small {
      margin-top: auto;
    }
  }

  &:active {
    outline: 1px solid white;
    filter: brightness(0.7);
  }
`;
