import React from "react";
import ResponsiveGrid from "./ResponsiveGrid";
import { Box, Heading } from "grommet";
import BlogCard from "../components/blog/BlogCard";
import Loading from "./Loading";

export default function Blogs({ blogs }) {
  if (!blogs) {
    return <Loading />;
  }
  return (
    <Box animation="fadeIn">
      <Heading level={1} alignSelf="center">
        Latest Blogs
      </Heading>
      <ResponsiveGrid>
        <Box gridArea="banner">{}</Box>
        <Box gridArea="content">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </Box>
        <Box gridArea="sidebar" margin="small"></Box>
      </ResponsiveGrid>
    </Box>
  );
}
