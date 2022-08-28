import Head from "next/head";
import styled from "@emotion/styled";

const HomePage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page of Videohead" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedVideo>
        <video autoPlay playsInline muted loop type="video/mp4">
          <source src="/test-video.mp4" />
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
