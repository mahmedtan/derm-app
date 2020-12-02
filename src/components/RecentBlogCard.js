import React from "react";
import { Heading, Text, Box, Image, Avatar } from "grommet";
import Linker from "./Linker";

const RecentBlogCard = (blog) => {
  return (
    <Box width="medium" pad="medium">
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="15rem" round="small" overflow="hidden">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading level={3} color="text" textAlign="center" color="#131600">
            {blog.title}
          </Heading>
        </Linker>
      </Box>
    </Box>
  );
};

export default RecentBlogCard;
