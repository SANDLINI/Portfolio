import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/profile-pic.png";
import styles from "./Header.module.css";
import phoneIcon from "../../assets/telephone-call.png";
import linkedInIcon from "../../assets/linkedin.png";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          padding: "10px",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "45px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h4">
            Hello, I am Sandeep Rawat, an aspiring frontend developer.
          </Typography>
          <Typography>
            I am a frontend developer specializing in building responsive,
            mobile friendly, beautiful and user interactive websites.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <img src={phoneIcon} alt="Phone" className={styles.icon} />
            +91 6399129402
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <img src={linkedInIcon} alt="LinkedIn" className={styles.icon} />
            <a href="https://www.linkedin.com/in/sandeep-rawat-1a33b6254/" target="_blank">
              LinkedIn
            </a>
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "40%", textAlign: "center" } }}>
          <img src={image} alt="Profile pic" className={styles.image} />
        </Box>
      </Box>
    </>
  );
};

export default Header;
