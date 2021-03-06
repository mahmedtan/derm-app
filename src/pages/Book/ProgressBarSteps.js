import React from "react";
import { Box } from "grommet";

function ProgressBarSteps({ total, active }) {
  return (
    <Box direction="row" gap="small">
      {total.map((item, index) => (
        <Box
          key={item.description}
          width="10px"
          height="10px"
          background={index < active ? "#694F5D" : "#fff"}
          round
        ></Box>
      ))}
    </Box>
  );
}

export default ProgressBarSteps;
