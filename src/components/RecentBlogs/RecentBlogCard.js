import React from "react";
import { Text, Box, Image, Anchor } from "grommet";
import Linker from "../Utils/Linker";
import { Link } from "react-router-dom";

const RecentBlogCard = (blog) => {
  return (
    <Box width="medium" pad="medium" gap="medium">
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="15rem" round="small" overflow="hidden">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box align="center">
        <Anchor
          size="xlarge"
          style={{
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "500",
          }}
          href={`/blogs/${blog.slug}`}
        >
          {blog.title}
        </Anchor>
      </Box>
    </Box>
  );
};

export default RecentBlogCard;
