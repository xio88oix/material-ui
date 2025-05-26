import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h4" component="h1">
        h4 Heading with h1 element in inspector
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4 Heading with gutterBottom margin
      </Typography>

      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        dignissimos quo ea hic assumenda cupiditate dolor! Libero quia rerum
        error hic eos enim, iusto deleniti. Officia incidunt quod sed sunt.
      </Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        dignissimos quo ea hic assumenda cupiditate dolor! Libero quia rerum
        error hic eos enim, iusto deleniti. Officia incidunt quod sed sunt.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        dignissimos quo ea hic assumenda cupiditate dolor! Libero quia rerum
        error hic eos enim, iusto deleniti. Officia incidunt quod sed sunt.
      </Typography>
    </div>
  );
};

export default MuiTypography;
