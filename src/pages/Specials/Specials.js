import { Box, Heading } from "grommet";
import React, { useEffect, useState } from "react";
import Background from "./background.png";
import Loading from "../Extras/Loading";
import { getSpecials } from "../../services/extras";
import BlockContentMain from "../../components/Utils/BlockContentMain";
import Special from "./Special";
import BookNowCard from "./BookNowCard";

const Specials = () => {
  const [specials, setSpecials] = useState(null);
  useEffect(() => {
    getSpecials().then((res) => {
      console.log("Specials:", res);
      setSpecials(res);
    });
  }, []);

  if (!specials) return <Loading />;

  return (
    <Box
      fill
      background={`url(${Background})`}
      align="center"
      gap="large"
      pad={{ top: "large" }}
    >
      <Box
        align="center"
        width="large"
        fill
        pad={{ horizontal: "large", vertical: "small" }}
        background={{ color: "background-front", opacity: "strong" }}
        border="horizontal"
      >
        <Heading style={{ fontFamily: "Dancing Script" }}>
          {specials.title}
        </Heading>
        <BlockContentMain body={specials.body} />
      </Box>

      <Special posters={specials.posters} banner={specials.avatar} />

      <BookNowCard />
    </Box>
  );
};

export default Specials;
