import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
     
          <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
            Fitness Club
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          >
            Sweat, Smile <br /> And Repeat
          </Typography>
          <Typography fontSize="20px" lineHeight="35px" mb={2}>
            Check out the most effective exercises
          </Typography>
          <Button variant="contained" color="error" href="#exercises" style={{padding:"8px 15px"}}>
            Explore Exercises
          </Button>
          <Typography
            fontWeight={600}
            color="#ff2625"
            sx={{
              opacity: 0.1,
              fontSize: "200px",
              display: { sm: "block", xs: "none" },
            }}
          >
            Exercises
          </Typography>
       
          <img
          className="hero-banner-img"
            src={HeroBannerImage}
            alt="banner"
          />
      
     
    </Box>
  );
};

export default HeroBanner;
