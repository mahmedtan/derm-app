import React from "react";
import { Heading, Text, Box, Image, Avatar } from "grommet";
import Linker from "./Linker";

const BlogCard = ({ blog }) => {
  return (
    <Box width="large" margin={{ bottom: "xlarge" }}>
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="medium">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>
      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading level={3} color="text">
            {blog.title}
          </Heading>
        </Linker>
        <Box direction="row" flex align="center" justify="start" gap="medium">
          <Avatar src={blog.author.image} elevation="medium" />
          <Text>
            <strong>{blog.author.name}</strong>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
