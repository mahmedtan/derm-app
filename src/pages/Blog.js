import { Heading, Box, Avatar, Text, Image } from "grommet";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Loading from "./Loading";

const Blog = ({ blog }) => {
  useEffect(() => window.scrollTo(0, 0), [blog]);

  if (!blog) {
    return <Loading />;
  }
  return (
    <Box align="center">
      <Box
        direction="column"
        justify="between"
        animation="zoomIn"
        gap="small"
        pad="large"
        margin="medium"
        width="large"
      >
        <Heading>{blog.title}</Heading>
        <Image src={blog.coverImage.url} />
        <Box
          direction="row"
          flex
          align="center"
          margin="small"
          justify="start"
          gap="medium"
        >
          <Avatar
            src={blog.author.picture.formats.thumbnail.url}
            elevation="medium"
          />
          <Text color="brand">
            <strong>{blog.author.name}</strong>
          </Text>
        </Box>
        <Box>
          <ReactMarkdown children={blog.content}></ReactMarkdown>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
