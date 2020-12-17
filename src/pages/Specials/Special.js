import { Box, Image } from "grommet";
import React from "react";

const Special = ({ posters, banner }) => {
  const miniBanners = posters.slice(0, 2);
  const rest = posters.slice(2);
  let divider = rest.length % 2 === 0 ? rest.length / 2 : rest.length / 2 + 1;

  const firstPosters = rest.slice(0, divider);
  const secondPosters = rest.slice(divider);
  return (
    <Box fill gap="large" pad="large">
      <Box justify="center" direction="row-responsive" gap="large">
        <Box width="medium" height="large" overflow="hidden" elevation="large">
          <Image src={banner} fit="cover" />
        </Box>

        <Box width="medium" height="large" gap="large">
          {miniBanners.map((poster) => (
            <Box
              key={poster}
              width="medium"
              height="medium"
              overflow="hidden"
              elevation="large"
            >
              <Image src={poster} fit="cover" />
            </Box>
          ))}
        </Box>
      </Box>
      <Box justify="center" direction="row-responsive" gap="large">
        <Box width="medium" gap="large">
          {firstPosters.map((poster) => (
            <Box
              key={poster}
              width="medium"
              height="medium"
              overflow="hidden"
              elevation="large"
            >
              <Image src={poster} fit="cover" />
            </Box>
          ))}
        </Box>
        <Box width="medium" gap="large">
          {secondPosters.map((poster) => (
            <Box
              key={poster}
              width="medium"
              overflow="hidden"
              height="medium"
              elevation="large"
            >
              <Image src={poster} fit="cover" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Special;
