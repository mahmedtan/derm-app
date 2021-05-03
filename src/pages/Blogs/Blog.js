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
          <Heading level="3" textAlign="center">
            {blog.title}
          </Heading>
          <Box
            width={{ max: "550px" }}
            height={{ max: "400px" }}
            align="center"
            alignSelf="center"
          >
            <Image src={blog.mainImage} fit="contain" />
          </Box>
          <Box
            direction="row"
            flex
            align="center"
            margin="small"
            justify="start"
            gap="medium"
          >
            <Avatar src={blog.author.image} elevation="medium" />
            <Box>
              <Text>
                <strong>{blog.author.name}</strong>
              </Text>
              <Text color="brand">{blog.author.bio}</Text>
            </Box>
          </Box>
          <Box style={{ textAlign: "justify" }}>
            <BlockContentMain body={blog.body} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
