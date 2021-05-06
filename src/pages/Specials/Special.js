import { Box, Image } from "grommet";
import React from "react";
import SanityMuxPlayer from "sanity-mux-player";

const Special = ({
  posters,
  banner,
  posterVideo1,
  posterVideo2,
  bannerVideo,
}) => {
  const miniBanners = posters.slice(0, 1);
  const rest = posters.slice(1);
  let divider = rest.length % 2 === 0 ? rest.length / 2 : rest.length / 2 + 1;

  const firstPosters = rest.slice(0, divider);
  const secondPosters = rest.slice(divider);
  return (
    <Box fill gap="large" pad="large" align="center">
      <Box gap="large" align="center">
        {bannerVideo && (
          <Box width="51rem">
            <SanityMuxPlayer
              autoload
              assetDocument={bannerVideo}
              autoplay
              loop
              playsInline
              showControls={false}
            />
          </Box>
        )}
      </Box>

      <Box justify="center" direction="row-responsive" gap="large">
        <Box width="medium" height="large" overflow="hidden" elevation="large">
          <Image src={banner} fit="cover" />
        </Box>

        <Box width="medium" height="large" gap="large">
          <Box direction="row-responsive" gap="large">
            {posterVideo1 && (
              <Box width="medium" elevation="large">
                <SanityMuxPlayer
                  assetDocument={posterVideo1}
                  autoplay
                  loop
                  showControls={false}
                />
              </Box>
            )}
          </Box>
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
