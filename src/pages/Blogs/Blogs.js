import React from "react";
import { Box, Heading } from "grommet";
import BlogCard from "../../components/BlogCard/BlogCard";
import Loading from "../Extras/Loading";
import Layout from "../../components/Utils/Layout";
import { Helmet } from "react-helmet";

export default function Blogs({ blogs }) {
  if (!blogs) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Latest Blogs</title>
      </Helmet>
      <Layout>
        <Box
          animation={{ type: "fadeIn", duration: "1500" }}
          margin="large"
          align="center"
          gap="small"
        >
          <Heading level={2} alignSelf="center">
            Latest Blogs
          </Heading>

          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </Box>
      </Layout>
    </>
  );
}
