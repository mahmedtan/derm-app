import React, { useContext, useEffect, useState } from "react";
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
          y: 42,
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
      alignSelf="center"
      height={size === "small" ? "300px" : "440px"}
      width={size === "small" ? "320px" : "650px"}
      background={`url(https://i.ibb.co/gyKDM6z/background-face.jpg)`}
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
        renderNode={CustomNode}
        useMesh={false}
        tooltip={({
          node: {
            data: { availableProcedures },
          },
        }) => {
          return (
            <Box
              background={{ color: "dark-3", opacity: "60%" }}
              pad="xsmall"
              elevation="large"
              round="xsmall"
            >
              {availableProcedures.map((item) => (
                <Text size={size} weight="normal" key={item.name} color="white">
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

const CustomNode = ({
  x,
  y,
  size,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  return (
    <g
      transform={`translate(${x},${y})`}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <circle
        r={size / 2}
        id="my-circle"
        opacity={0.3}
        stroke="black"
        strokeOpacity="0.3"
        strokeWidth="1"
        fill={color}
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          additive="add"
          begin="0s"
          dur="2.5s"
          values="1; 1.5; 1"
          keyTimes="0; 0.5; 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </g>
  );
};
export default FaceVisual;
