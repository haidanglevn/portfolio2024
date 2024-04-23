import { Button, Stack } from "@mui/material";
import React from "react";
import "../styles/ProjectCard.css";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function ProjectCard(project, index) {
  function createTechStackString() {
    if (project.techStack.length <= 3) {
      return project.techStack.map((tech) => tech.name).join(", ");
    } else {
      let string = project.techStack
        .slice(0, 3)
        .map((tech) => tech.name)
        .join(", ");
      return (string += ",...");
    }
  }

  function createTechStackIcon() {
    return project.techStack.map((tech) => {
      return (
        <img
          style={{ height: "30px", width: "30px" }}
          src={tech.icon}
          title={tech.name}
        />
      );
    });
  }

  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={project.images[0]}></img>
      </div>
      <div className="project-card-info">
        <h3>{project.name}</h3>
        <p>{project.description} </p>
        <Stack sx={{ marginTop: "10px" }}>
          <Stack
            sx={{
              borderBottom: "1px solid white",
              padding: "10px 0",
              fontWeight: "bold",
            }}
          >
            <h4>PROJECT INFO</h4>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ borderBottom: "1px solid white", padding: "10px 0" }}
          >
            <h4>Year</h4>
            <p>{project.year}</p>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ borderBottom: "1px solid white", padding: "10px 0" }}
          >
            <h4>Tech Stack</h4>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {createTechStackIcon()}
            </div>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={"20px"}
          alignItems={"flex-start"}
          margin={"20px 0"}
        >
          {project.liveDemoLink && (
            <Button
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: "none",
                fontWeight: "bold",
                color: "var(--secondary-color)",
                borderBottom: "2px solid var(--secondary-color)",
                borderRadius: "0",
              }}
            >
              <Link
                to={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Live Page
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button
              endIcon={<GitHubIcon />}
              sx={{
                backgroundColor: "none",
                fontWeight: "bold",
                color: "var(--secondary-color)",
                borderBottom: "2px solid var(--secondary-color)",
                borderRadius: "0",
              }}
            >
              <Link
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                GitHub Repo
              </Link>
            </Button>
          )}
        </Stack>
      </div>
    </div>
  );
}

export default ProjectCard;
