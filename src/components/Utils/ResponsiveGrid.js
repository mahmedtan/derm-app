import React from "react";

import { Grid, ResponsiveContext } from "grommet";

const columns = {
  small: ["auto"],
  medium: ["large", "medium"],
  large: ["large", "medium"],
  xlarge: ["large", "medium"],
};

const rows = {
  small: ["auto", "auto", "auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"],
};

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "content", start: [0, 0], end: [0, 0] },
    { name: "sidebar", start: [0, 1], end: [0, 1] },
    { name: "banner", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "content", start: [0, 0], end: [0, 1] },
    { name: "sidebar", start: [1, 0], end: [1, 1] },
    { name: "banner", start: [0, 1], end: [1, 1] },
  ],
  large: [
    { name: "content", start: [0, 0], end: [0, 1] },
    { name: "sidebar", start: [1, 0], end: [1, 1] },
    { name: "banner", start: [0, 1], end: [1, 1] },
  ],
  xlarge: [
    { name: "content", start: [0, 0], end: [0, 1] },
    { name: "sidebar", start: [1, 0], end: [1, 1] },
    { name: "banner", start: [0, 1], end: [1, 1] },
  ],
};

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
          justifyContent="center"
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const ResponsiveGrid = ({ children }) => {
  return (
    <div>
      <Responsive
        rows={rows}
        columns={columns}
        gap="xlarge"
        areas={fixedGridAreas}
        pad="medium"
        margin="medium"
      >
        {children}
      </Responsive>
    </div>
  );
};

export default ResponsiveGrid;
