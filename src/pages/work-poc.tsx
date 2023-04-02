import React from "react";
import client from "../../client";
import VideoRowPoc from "../components/video-row-poc";
import { SingleWork } from "../types/types";

const WorkPoc = ({ work }: { work: SingleWork[] }) => {
  const videoObj = {
    client: "1300",
    title: "Smashmouth",
    category: "Music Video",
    date: "11/06/22",
    clips: [],
    description: "",
    id: 0,
    source: "",
    videoId: 0,
    award: {
      title: "",
      won: false,
      url: "",
    },
  };

  const videosArr = work.map((x) => ({
    ...videoObj,
    clips: [...x.previewClips.map((x) => x.asset.url)],
  }));

  return (
    <div style={{ marginTop: "8rem" }}>
      {videosArr.map((x, i) => (
        <VideoRowPoc video={x} key={i} />
      ))}
    </div>
  );
};

export default WorkPoc;

export async function getStaticProps() {
  const work = await client.fetch(`
  *[_type == "videoPoc"]{
    previewClips[]{
      asset -> { url }
    }
  }
`);
  return {
    props: {
      work,
    },
  };
}
