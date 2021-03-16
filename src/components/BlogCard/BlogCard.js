import React from "react";
import {
  Heading,
  Text,
  Box,
  Image,
  Avatar,
  Anchor,
  ResponsiveContext,
  Button,
} from "grommet";
import Linker from "../Utils/Linker";
import { useContext } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box width="40rem" margin={{ bottom: "large" }}>
      <Linker to={`/blogs/${blog.slug}`}>
        <Box elevation="medium" height="medium" overflow="hidden" round="small">
          <Image fit="cover" src={blog.mainImage} a11yTitle="bridge" />
        </Box>
      </Linker>

      <Box>
        <Linker to={`/blogs/${blog.slug}`}>
          <Heading
            level={size === "small" ? "3" : "4"}
            color="text"
            textAlign="center"
          >
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
        <Box width="40rem" align="center">
          <Text
            margin={{ top: "medium", bottom: "small" }}
            style={{ textAlign: "justify" }}
          >
            {blog.description}
          </Text>
          <Link
            to={`/blogs/${blog.slug}`}
            color="brand"
            style={{ fontWeight: "bold" }}
            component={Anchor}
          >
            Learn more
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
