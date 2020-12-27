import React, { useContext } from "react";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { ResponsiveContext } from "grommet";

const BlockContentMain = ({ body, ...extras }) => {
  const size = useContext(ResponsiveContext);

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);
        return (
          <YouTube
            videoId={id}
            opts={size === "small" && { width: "330", height: "200" }}
          />
        );
      },
    },
  };
  return (
    <BlockContent
      blocks={body}
      projectId="zegc2wrv"
      dataset="production"
      serializers={serializers}
    />
  );
};

export default BlockContentMain;
