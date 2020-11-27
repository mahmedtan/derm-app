import { Heading, Box, Avatar, Text } from "grommet";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Loading from "../components/Loading";

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
        <Box direction="row" flex align="center" justify="start" gap="medium">
          <Avatar
            src={blog.author.picture.formats.thumbnail.url}
            elevation="medium"
          />
          <Text color="brand">
            <strong>{blog.author.name}</strong>
          </Text>
        </Box>
        <ReactMarkdown plugins={[gfm]} children={blog.content} />
      </Box>
    </Box>
  );
};

export default Blog;
