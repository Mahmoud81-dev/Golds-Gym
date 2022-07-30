import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack alignItems="center" gap="40px" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h6" sx={{fontSize:{lg:"20px",xs:"15px"}}}>Made With ❤️ by Mahmoud Hamdy</Typography>

        <Stack direction="row" mb={3} gap="20px" >
          <a
            href="https://www.facebook.com/profile.php?id=100010258625338"
            target="_blank"
            rel="noreferrer"
           style={{color:"#4267B2"}}
          >
            <Facebook  />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-hamdy-7a3895195"
            target="_blank"
            rel="noreferrer"
            style={{color:"#0077B5"}}
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Mahmoud81-dev"
            target="_blank"
            rel="noreferrer"
            style={{color:"#171515"}}
          >
            <GitHub />
          </a>

        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
