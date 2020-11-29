import { Box, Text } from "grommet";
import Newsletter from "../components/Newsletter/Newsletter";
import ResponsiveGrid from "./ResponsiveGrid";
import SidebarHome from "../components/Sidebar/SidebarHome";
import Slider from "../components/Slider/Slider";
const Home = () => {
  return (
    <Box animation="fadeIn" overflow="hidden" align="center">
      <Slider />
      <ResponsiveGrid>
        <Box gridArea="sidebar">
          <SidebarHome />
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
