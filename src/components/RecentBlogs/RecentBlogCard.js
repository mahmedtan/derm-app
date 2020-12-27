import React from "react";
import { Text, Box, Image } from "grommet";
import Linker from "../Utils/Linker";

const RecentBlogCard = (blog) => {
  return (
    <Box width="medium" pad="medium" gap="medium">
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="15rem" round="small" overflow="hidden">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Text size="xlarge" color="text" textAlign="center">
            {blog.title}
          </Text>
        </Linker>
      </Box>
    </Box>
  );
};

export default RecentBlogCard;
