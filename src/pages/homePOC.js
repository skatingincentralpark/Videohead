import styled from "@emotion/styled";
import { allGifLinks } from "../components/all-gifs";

const HomePOC = () => {
  const videos = [
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
    {
      client: "1300",
      title: "Rockstar",
      category: "Music Video",
      date: "29th Aug 2022",
    },
  ];

  return (
    <PageWrapper>
      {videos.map((v, i) => (
        <Row key={v.title}>
          <Info line1={v.client} line2={v.title} l />
          <GifGroup>
            <Image src={allGifLinks[i * 3]} />
            <Image src={allGifLinks[i * 3 + 1]} />
            <Image src={allGifLinks[i * 3 + 2]} />
          </GifGroup>
          <Info line1={v.category} line2={v.date} r />
        </Row>
      ))}
      <Bio>
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
      </Bio>
    </PageWrapper>
  );
};

export default HomePOC;

const PageWrapper = styled.div`
  padding-top: var(--gap-page-top);
  margin: auto;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;
const GifGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: clamp(30rem, 30vw + 4rem, 45rem);
`;

const Bio = styled.div`
  font-weight: 600;
  width: clamp(30rem, 30vw + 4rem, 45rem);
  margin: var(--gap-l) auto 0 auto;
  padding-bottom: var(--gap-3xl);

  font-size: 0.9rem;
  line-height: 1.2em;
  color: var(--gray-3);
  font-weight: 300;

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
`;

const Info = ({ line1, line2, l, r }) => {
  return (
    <InfoWrapper l={l} r={r}>
      <div>{line1}</div>
      <div>{line2}</div>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  font-size: 0.9rem;
  line-height: 1.2em;
  text-align: ${({ r }) => (r ? "left" : "right")};
  min-width: 10rem;
  padding: 0 var(--gap-m);
  display: none;

  & > div:first-of-type {
    font-weight: 600;
    font-style: oblique;
  }
  & > div:last-of-type {
    font-style: oblique;
    color: var(--gray-3);
    font-weight: 400;
  }
  @media screen and (min-width: 700px) {
    display: block;
  }
`;

const Image = ({ src }) => {
  return (
    <ImageWrapper>
      <div />
      <img src={src} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
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
`;
