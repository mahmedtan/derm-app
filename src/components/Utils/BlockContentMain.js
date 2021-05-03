import React, { useContext } from "react";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

const BlockContentMain = ({ body, className, ...extras }) => {
  const size = useContext(ResponsiveContext);
  const uiTheme = useSelector(({ uiTheme }) => uiTheme);

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
    marks: {
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
        ) : (
          <a
            href={href}
            style={{ color: uiTheme === "light" ? "#694F5D" : "#B9A2AE" }}
          >
            {children}
          </a>
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
