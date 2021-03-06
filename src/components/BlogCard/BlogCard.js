import React from "react";
import {
  Heading,
  Text,
  Box,
  Image,
  Avatar,
  Paragraph,
  Button,
  Anchor,
} from "grommet";
import Linker from "../Utils/Linker";

const BlogCard = ({ blog }) => {
  return (
    <Box width="large" margin={{ bottom: "xlarge" }}>
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="medium" overflow="hidden" round="small">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading level={3} color="text" style={{ textAlign: "center" }}>
            {blog.title}
          </Heading>
        </Linker>
        <Box direction="row" flex align="center" justify="start" gap="medium">
          <Avatar src={blog.author.image} elevation="medium" />
          <Box>
            <Text>
              <strong>{blog.author.name}</strong>
            </Text>

            <Text color="brand">{blog.author.bio}</Text>
          </Box>
        </Box>
        <Text margin={{ vertical: "medium" }}>
          {blog.description}{" "}
          <Anchor label="learn more" href={`/blogs/${blog.slug}`} />
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;
