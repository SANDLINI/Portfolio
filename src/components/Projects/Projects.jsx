import { Typography, Box } from "@mui/material";
import React from "react";
import styles from "./Projects.module.css";
import { Portfolio_data } from "../../Portfolio_data/Portfolio_data";

const Projects = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", textAlign: "center", p: 5, m: 5 }}
      >
        Projects
      </Typography>
      <Box
        sx={{ mb: 10, display: "flex", flexDirection: "column", gap: "30px" }}
      >
        {Portfolio_data.map((projects, ind) => {
          return (
            <Box
              key={ind}
              sx={{
                display: "flex",
                flexWrap:'wrap',
                gap:'15px',
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: {xs: '90%', md: '40%'} }}>
                <Box>
                  <Typography variant="h5" sx={{fontWeight:'600'}}>{projects.heading}</Typography>
                </Box>
                <Box>
                  <Typography>{projects.description}</Typography>
                </Box>
                <Box>
                  <Typography>
                    <a href={projects.link} target="_blank">
                      Live Demo
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: {xs:'90%', md : '40%'},
                  border: "5px solid black",
                  borderRadius: "10px",
                }}
              >
                <a href={projects.link} target="_blank">
                  <img
                    src={projects.image}
                    alt="Image"
                    className={styles.image}
                  />
                </a>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;

//
