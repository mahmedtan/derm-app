import { Heading, Box, Avatar, Text, Image } from "grommet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFullBlog } from "../../services/blogs";
import PageNotFound from "../Extras/404";
import BlockContentMain from "../../components/Utils/BlockContentMain";

import Loading from "../Extras/Loading";
import Layout from "../../components/Utils/Layout";

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
      <Box align="center" margin={{ horizontal: "large", bottom: "large" }}>
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
          <BlockContentMain body={blog.body} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
