import Head from "next/head";
import styled from "@emotion/styled";
import YtLite from "../components/yt-lite";
import VideoLightbox from "../components/video-lightbox";
import client from "../../client";
import PortableText from "react-portable-text";
import { useState } from "react";

const MusicVideoPage = ({ youtubeVideos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  return (
    <PageWrapper>
      <Head>
        <title>Music Videos</title>
        <meta name="description" content="Music Videos page of Videohead" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoLightbox
        youtubeVideos={youtubeVideos}
        selectedVideoIndex={selectedVideoIndex}
        setSelectedVideoIndex={setSelectedVideoIndex}
      />
      <VideoWrapper>
        {youtubeVideos.map(({ description, id, title, videoId }, i) => (
          <div key={id}>
            <Button onClick={() => setSelectedVideo(i)}>Select</Button>
            <YtLite key={id} title={title} videoId={videoId} />
            <PortableText content={description} />
          </div>
        ))}
      </VideoWrapper>
    </PageWrapper>
  );
};

export default MusicVideoPage;

const PageWrapper = styled.div`
  padding: var(--gap-3xl);
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    flex-grow: 1;
    width: calc(100% / 3);
    margin-bottom: var(--gap-s);
  }
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 0.3rem 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export async function getStaticProps() {
  const youtubeVideos = await client.fetch(`
    *[_type == "youtubeVideo"][]{
      "id": _id,
      title,
      videoId,
      description
    }
  `);

  return {
    props: {
      youtubeVideos,
    },
  };
}
