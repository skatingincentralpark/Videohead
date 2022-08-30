import Head from "next/head";
import styled from "@emotion/styled";
import client from "../../client";

const HomePage = ({ landingVideo }) => {
  const { url } = landingVideo;
  return (
    <PageWrapper>
      <HeadSEO title="Home" desc="Landing page" />
      <FeaturedVideo>
        <video autoPlay playsInline muted loop type="video/mp4">
          <source src={url} />
        </video>
      </FeaturedVideo>
    </PageWrapper>
  );
};

export default HomePage;

const PageWrapper = styled.div`
  padding: var(--gap-3xl);
  height: 100%;
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

export async function getStaticProps() {
  const query = await client.fetch(`
    *[_type == "siteSettings"][]{
      landingVideo {
        "url": asset -> url
      } 
    }
  `);

  return {
    props: {
      landingVideo: query[0].landingVideo,
    },
  };
}
