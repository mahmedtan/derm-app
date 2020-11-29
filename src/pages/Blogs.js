import React from "react";
import { Box, Heading } from "grommet";
import BlogCard from "../components/Blog/BlogCard";
import Loading from "./Loading";

export default function Blogs({ blogs }) {
  if (!blogs) {
    return <Loading />;
  }
  return (
    <Box animation="fadeIn" margin="large" align="center" gap="medium">
      <Heading level={1} alignSelf="center">
        Latest Blogs
      </Heading>

      {blogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </Box>
  );
}
