import React from "react";
import client from "../../client";
import VideoRowPoc from "../components/video-row-poc";

const WorkPoc = ({ videos }) => {
  const videoObj = {
    client: "1300",
    title: "Smashmouth",
    category: "Music Video",
    date: "11/06/22",
    clips: [
      "/videos/smash-1.mp4",
      "/videos/smash-2.mp4",
      "/videos/smash-3.mp4",
    ],
    description: "",
    id: 0,
    source: "",
    videoId: 0,
    award: {},
  };
  const videosArr = videos.map((x) => ({
    ...videoObj,
    clips: [...x.previewClips.map((x) => x.asset.url)],
  }));

  return (
    <div style={{ marginTop: "8rem" }}>
      {videosArr.map((x, i) => (
        <VideoRowPoc video={x} key={i} />
      ))}
      {videosArr.map((x, i) => (
        <VideoRowPoc video={x} key={`second-${i}`} />
      ))}
      {videosArr.map((x, i) => (
        <VideoRowPoc video={x} key={`third-${i}`} />
      ))}
    </div>
  );
};

export default WorkPoc;

export async function getStaticProps() {
  const videos = await client.fetch(`
  *[_type == "videoPoc"]{
    previewClips[]{
      asset -> { url }
    }
  }
`);
  return {
    props: {
      videos,
    },
  };
}
