import React, { useContext } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import BackgroundFace from "./background-face.jpg";
import { Link } from "react-router-dom";

const FaceVisual = () => {
  const size = useContext(ResponsiveContext);
  const smallData = [
    {
      data: [
        {
          x: 23,
          y: 65,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Acne",
              url: "/services/acne",
            },
          ],
        },

        {
          x: 50,
          y: 83,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 85,
          y: 88,
          availableProcedures: [
            {
              name: "Eczema",
              url: "/services/eczema",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 31,
          y: 20,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 28,
          y: 45,
          availableProcedures: [
            {
              name: "Sclerotherapy",
              url: "/services/sclerotherapy",
            },
            {
              name: "Botox",
              url: "/services/botox",
            },
          ],
        },
        {
          x: 63,
          y: 38,
          availableProcedures: [
            {
              name: "PRP",
              url: "/services/prp",
            },
            {
              name: "Microneedling",
              url: "/services/microneedling",
            },
          ],
        },
      ],
    },
  ];
  const data = [
    {
      data: [
        {
          x: 35,
          y: 65,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Acne",
              url: "/services/acne",
            },
          ],
        },

        {
          x: 49.5,
          y: 83,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 69,
          y: 88,
          availableProcedures: [
            {
              name: "Eczema",
              url: "/services/eczema",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 39,
          y: 20,
          availableProcedures: [
            {
              name: "Botox",
              url: "/services/botox",
            },
            {
              name: "Fillers",
              url: "/services/fillers",
            },
          ],
        },
        {
          x: 38,
          y: 45,
          availableProcedures: [
            {
              name: "Sclerotherapy",
              url: "/services/sclerotherapy",
            },
            {
              name: "Botox",
              url: "/services/botox",
            },
          ],
        },
        {
          x: 58,
          y: 38,
          availableProcedures: [
            {
              name: "PRP",
              url: "/services/prp",
            },
            {
              name: "Microneedling",
              url: "/services/microneedling",
            },
          ],
        },
        {
          x: 65,
          y: 72,
          availableProcedures: [
            {
              name: "PRP",
              url: "/services/prp",
            },
            {
              name: "Microneedling",
              url: "/services/microneedling",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box
      height="medium"
      width="large"
      background={`url(${BackgroundFace})`}
      elevation="large"
    >
      <ResponsiveScatterPlot
        animate="true"
        data={size === "small" ? smallData : data}
        xScale={{ type: "linear", min: 0, max: 100 }}
        yScale={{ type: "linear", min: 0, max: 100 }}
        colors={{ scheme: "red_purple" }}
        blendMode="mixed"
        nodeSize={18}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        useMesh={false}
        tooltip={({
          node: {
            data: { availableProcedures },
          },
        }) => {
          return (
            <Box background="background" pad="medium" elevation="large" round>
              {availableProcedures.map((item) => (
                <Text size="large" weight="bold" key={item.url}>
                  {item.name}
                </Text>
              ))}
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default FaceVisual;
