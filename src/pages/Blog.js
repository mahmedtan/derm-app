import { Heading, Box, Avatar, Text, Image } from "grommet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { getFullBlog } from "../services/blogs";
import PageNotFound from "./404";

import Loading from "./Loading";
import Layout from "../components/Layout";

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    getFullBlog(slug).then((blog) => setBlog(blog[0]));
  }, [slug]);
  if (blog === undefined) {
    return <PageNotFound />;
  }
  if (!blog) {
    return <Loading />;
  }

  return (
    <Layout>
      <Box align="center" margin={{ horizontal: "large" }}>
        <Box width="large" gap="medium">
          <Heading>{blog.title}</Heading>
          <Image src={blog.mainImage} fit="contain" />
          <Box
            direction="row"
            flex
            align="center"
            margin="small"
            justify="start"
            gap="medium"
          >
            <Avatar src={blog.author.image} elevation="medium" />
            <Text>
              <strong>{blog.author.name}</strong>
            </Text>
          </Box>
          <BlockContent
            blocks={blog.body}
            projectId="zegc2wrv"
            dataset="production"
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
