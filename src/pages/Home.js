import { Box, Text } from "grommet";
import { useState } from "react";
import Newsletter from "../components/Newsletter";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <Box animation="fadeIn" overflow="hidden" align="center">
      <Slider />
      <ResponsiveGrid>
        <Box background="yellow" gridArea="sidebar" pad="small">
          <Text weight="bold">Sidebar</Text>
        </Box>

        <Box background="blue" gridArea="content" pad="small">
          <Text weight="bold">Main</Text>
        </Box>

        <Box gridArea="banner" align="center">
          <Newsletter />
        </Box>
      </ResponsiveGrid>
    </Box>
  );
};

export default Home;
