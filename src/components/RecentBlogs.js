import { Button, Heading } from "grommet";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import RecentBlogCard from "./RecentBlogCard";
import Loading from "../pages/Loading";
import { Down } from "grommet-icons";
import { Link } from "react-router-dom";

const RecentBlogs = ({ blogs }) => {
  const [recentBlogs, setRecentBlogs] = useState(null);

  useEffect(() => {
    blogs && setRecentBlogs(blogs.slice(0, 3));
  }, [blogs]);

  if (!(blogs && recentBlogs)) {
    console.log("🤯");
    return <Loading />;
  }

  return (
    <Box
      align="center"
      width="full"
      height="full"
      background="#e9e6fc"
      pad="medium"
    >
      <Heading color="#131600">Recent Blogs</Heading>
      <Box direction="row-responsive" gap="small">
        {recentBlogs.map((blog) => (
          <RecentBlogCard {...blog} key={blog.slug} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentBlogs;
