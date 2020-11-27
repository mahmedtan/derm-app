import React from "react";
import { Heading, Text, Box, Image, Avatar } from "grommet";
import Linker from "./Utils/Linker";

const BlogCard = ({ blog }) => {
  const { title, author } = blog;
  return (
    <Box margin={{ vertical: "large" }}>
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="medium">
          <Image
            fit="cover"
            src={blog.coverImage.formats.large.url}
            a11yTitle="bridge"
          />
        </Box>
      </Linker>
      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading level={2} color="text">
            {title}
          </Heading>
        </Linker>
        <Box direction="row" flex align="center" justify="start" gap="medium">
          <Avatar
            src={author.picture.formats.thumbnail.url}
            elevation="medium"
          />
          <Text color="brand">
            <strong>{author.name}</strong>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
