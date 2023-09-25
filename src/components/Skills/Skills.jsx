import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Skills.module.css";
import { skillsImages } from "../../Portfolio_data/Portfolio_data";

const Skills = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h3"
          sx={{ fontWeight: "600", textAlign: "center", mb: 10 }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-evenly" },
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {skillsImages.map((icons, ind) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box key={ind}>
                  <img
                    src={icons.image}
                    alt="Skills Icons"
                    className={styles.images}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {icons.skill}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Skills;
