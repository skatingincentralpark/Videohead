import React from "react";
import VideoLightboxVimeo from "./video-lightbox-vimeo";
import VideoLightboxYt from "./video-lightbox-yt";

const LightboxSwitcher = ({
  type,
  videos = [],
  selectedVideoIndex,
  setSelectedVideoIndex,
  setLightboxOpen,
}) => {
  if (type === "vimeo")
    return (
      <VideoLightboxVimeo
        videos={videos}
        selectedVideoIndex={selectedVideoIndex}
        setSelectedVideoIndex={setSelectedVideoIndex}
        setLightboxOpen={setLightboxOpen}
      />
    );

  if (type === "youtube")
    return (
      <VideoLightboxYt
        videos={videos}
        selectedVideoIndex={selectedVideoIndex}
        setSelectedVideoIndex={setSelectedVideoIndex}
        setLightboxOpen={setLightboxOpen}
      />
    );
};

export default LightboxSwitcher;
