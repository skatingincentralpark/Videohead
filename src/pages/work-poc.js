import React from "react";
import VideoRowPoc from "../components/video-row-poc";

const WorkPoc = () => {
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

  return (
    <div style={{ marginTop: "8rem" }}>
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
      <VideoRowPoc video={videoObj} />
    </div>
  );
};

export default WorkPoc;
