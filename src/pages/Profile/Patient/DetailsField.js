import { Box, ResponsiveContext, Text } from "grommet";
import { useContext } from "react";

const DetailsField = ({ fieldName, fieldValue }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      direction="row-responsive"
      align="center"
      justify="between"
      gap={size === "small" ? "small" : "large"}
    >
      <Text weight="500" size="large">
        {fieldName}
      </Text>
      <Text>{fieldValue}</Text>
    </Box>
  );
};

export default DetailsField;
