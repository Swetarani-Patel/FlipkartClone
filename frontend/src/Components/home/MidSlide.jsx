import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const RightComponent = styled(Box)(({ theme}) => ({
  bgcolor:"white",
  marginTop:"15px",
  height:"52.5vh",
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}));

function MidSlide({ products, title, timer, tagline }) {
  const adURL =
    "https://rukminim1.flixcart.com/fk-p-flap/470/720/image/db75ad39921d9bdc.jpg?q=20";

  return (
    <Box display="flex" width="100%" justifyContent="space-between" gap="1rem">
      <Box width="82%">
        <Slide products={products} title={title} timer={timer} tagline={tagline}/>
      </Box>
      <RightComponent >
        <img src={adURL} alt="ad" width="100%" height="100%" />
      </RightComponent>
    </Box>
  );
}

export default MidSlide;
