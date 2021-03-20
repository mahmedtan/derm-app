import { Heading, ResponsiveContext } from "grommet";
import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import RecentBlogCard from "./RecentBlogCard";
import Loading from "../../pages/Extras/Loading";
import { useContext } from "react";

const RecentBlogs = ({ blogs }) => {
  const [recentBlogs, setRecentBlogs] = useState(null);
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    blogs && setRecentBlogs(blogs.slice(0, 3));
  }, [blogs]);

  if (!(blogs && recentBlogs)) {
    return <Loading />;
  }

  return (
    <Box
      align="center"
      width="full"
      height="full"
      background="brand-secondary"
      pad="medium"
      gap={size === "small" ? "2rem" : "large"}
    >
      <Heading color="#131600" level="2" margin="none">
        Recent Blogs
      </Heading>
      <Box direction="row-responsive" gap="small">
        {recentBlogs.map((blog) => (
          <RecentBlogCard {...blog} key={blog.slug} />
        ))}
      </Box>
    </Box>
  );
};

export default RecentBlogs;
