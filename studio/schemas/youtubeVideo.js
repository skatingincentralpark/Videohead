import { RobotIcon } from "@sanity/icons";

export default {
  name: "youtubeVideo",
  title: "Youtube Video",
  type: "document",
  icon: RobotIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "videoId",
      title: "Video ID",
      type: "string",
      description:
        "When you click share, it is the ID at the end of the URL.  E.g. https://youtu.be/98yFlEQ6reQ",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
