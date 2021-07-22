import { Box, Heading, Text, Video } from "grommet";
import React, { useEffect, useState } from "react";
import Loading from "../Extras/Loading";
import { getSpecials } from "../../services/extras";
import Special from "./Special";
import BookNowCard from "./BookNowCard";
import { Helmet } from "react-helmet";

const Specials = () => {
  const [specials, setSpecials] = useState(null);
  useEffect(() => {
    getSpecials().then((res) => {
      setSpecials(res);
    });
  }, []);

  if (!specials) return <Loading />;
  console.log(specials);

  return (
    <>
      <Helmet>
        <title>{specials.title}</title>
        {specials.metaTags &&
          specials.metaTags.map(({ _key, _type, ...tag }) => (
            <meta key={_key} {...tag} />
          ))}
      </Helmet>
      <Box
        fill
        align="center"
        gap="small"
        pad={{ top: "large" }}
        animation={{ type: "fadeIn", duration: "1500" }}
      >
        <Box
          align="center"
          width="large"
          fill="horizontal"
          gap="small"
          pad={{ horizontal: "large", vertical: "medium" }}
          background={{ color: "background-contrast" }}
          border="horizontal"
        >
          <Heading style={{ fontFamily: "Dancing Script" }} margin="none">
            {specials.title}
          </Heading>
          <Text textAlign="center">{specials.description}</Text>
        </Box>

        <Special
          posters={specials.posters}
          banner={specials.avatar}
          posterVideo1={specials.posterVideo1}
          posterVideo2={specials.posterVideo2}
          bannerVideo={specials.bannerVideo}
        />

        <BookNowCard />
      </Box>
    </>
  );
};

export default Specials;
