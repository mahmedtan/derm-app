import React, { useContext } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import BackgroundFace from "./background-face.jpeg";
import { Link } from "react-router-dom";

const FaceVisual = () => {
  const size = useContext(ResponsiveContext);

  const smallData = [
    {
      data: [
        {
          x: 25,
          y: 65,
          availableProcedures: [
            {
              name: "Fillers",
            },
            {
              name: "PDO Threads",
            },
          ],
        },

        {
          x: 49.5,
          y: 92,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "Laser",
            },
            {
              name: "Microneedling",
            },
          ],
        },
        {
          x: 89,
          y: 92,
          availableProcedures: [
            {
              name: "PRP for Hair Loss",
            },
          ],
        },
        {
          x: 42,
          y: 7,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "PRP",
            },
            {
              name: "Radiofrequency",
            },
          ],
        },
        {
          x: 30,
          y: 45,
          availableProcedures: [
            {
              name: "PRP",
            },
            {
              name: "Fillers",
            },
            {
              name: "Chemical Peels",
            },
          ],
        },
        {
          x: 59,
          y: 43,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "Fillers",
            },
            {
              name: "PDO Threads",
            },
          ],
        },
        {
          x: 85,
          y: 78,
          availableProcedures: [
            {
              name: "Fillers",
            },
            {
              name: "Botox",
            },
            {
              name: "Microneedling",
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
          x: 32,
          y: 65,
          availableProcedures: [
            {
              name: "Fillers",
            },
            {
              name: "PDO Threads",
            },
          ],
        },

        {
          x: 49.5,
          y: 92,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "Laser",
            },
            {
              name: "Microneedling",
            },
          ],
        },
        {
          x: 78,
          y: 95,
          availableProcedures: [
            {
              name: "PRP for Hair Loss",
            },
          ],
        },
        {
          x: 42,
          y: 8,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "PRP",
            },
            {
              name: "Radiofrequency",
            },
          ],
        },
        {
          x: 35,
          y: 45,
          availableProcedures: [
            {
              name: "PRP",
            },
            {
              name: "Fillers",
            },
            {
              name: "Chemical Peels",
            },
          ],
        },
        {
          x: 56,
          y: 43,
          availableProcedures: [
            {
              name: "Botox",
            },
            {
              name: "Fillers",
            },
            {
              name: "PDO Threads",
            },
          ],
        },
        {
          x: 76,
          y: 78,
          availableProcedures: [
            {
              name: "Fillers",
            },
            {
              name: "Botox",
            },
            {
              name: "Microneedling",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box
      height={size === "small" ? "20rem" : "28rem"}
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
        nodeSize={size === "small" ? 15 : 18}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisBottom={null}
        axisLeft={null}
        axisRight={null}
        useMesh={false}
        tooltip={({
          node: {
            data: { availableProcedures },
          },
        }) => {
          return (
            <Box
              background="background"
              pad="small"
              elevation="large"
              round="small"
            >
              {availableProcedures.map((item) => (
                <Text size={size} weight="bold" key={item.name}>
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
