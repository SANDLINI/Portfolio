import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Contact.module.css";
import callIcon from "../../assets/telephone-call.png";
import mailIcon from "../../assets/mail.png";
import linkedInIcon from "../../assets/linkedin.png";
import gitIcon from "../../assets/github.png";

const Contact = () => {
  return (
    <>
      <Box sx={{ m: 10 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "600", p: 3 }}
        >
          Contact
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            gap: "20px",
            width: { xs: "100%" },
          }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <img src={callIcon} alt="Mobile" className={styles.icon} /> +91
            6399129402
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <img src={mailIcon} alt="Email" className={styles.icon} />
            dominictorreto870@gmail.com
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <img src={linkedInIcon} alt="LinkedIn" className={styles.icon} />
            <a
              href="https://www.linkedin.com/in/sandeep-rawat-1a33b6254/"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <img src={gitIcon} alt="GitHub" className={styles.icon} />
            <a href="https://github.com/SANDLINI" target="_blank">
              GitHub
            </a>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
