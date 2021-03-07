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
    <Box width="40rem" margin={{ bottom: "large" }}>
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="medium" overflow="hidden" round="small">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading level={4} color="text">
            {blog.title}
          </Heading>
        </Linker>
        <Box direction="row" flex align="center" justify="start" gap="medium">
          <Avatar src={blog.author.image} elevation="medium" />
          <Box>
            <Text>
              <strong>{blog.author.name}</strong>
            </Text>

            <Text color="brand" style={{ textAlign: "justify" }}>
              {blog.author.bio}
            </Text>
          </Box>
        </Box>
        <Box width="40rem">
          <Text
            margin={{ vertical: "medium" }}
            style={{ textAlign: "justify" }}
          >
            {blog.description}
            <Anchor
              label="learn more"
              href={`/blogs/${blog.slug}`}
              color="brand"
              style={{ fontWeight: "bold" }}
            />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
