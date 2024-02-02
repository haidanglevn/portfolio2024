import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import portrait from "/assets/portrait.png";
import ActionButton from "../components/ActionButton";
import { Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import ProjectCard from "../components/ProjectCard";

import projectsData from "../ProjectsData.json";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData.length !== 0) {
      setProjects(projectsData);
    }
  }, [projectsData]);

  const renderProjectCards = () => {
    if (projects.length === 0) {
      console.log("run1");
      return <div>Loading...</div>;
    } else {
      console.log("run2");
      return projects.map((project, index) => {
        return <ProjectCard {...project} />;
      });
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="home-outline">
        <div className="hero">
          <div className="hero-left">
            <h1>
              Dang, <br /> let's code!
            </h1>
            <p>
              A Helsinki based full-stack developer with passion for consumer{" "}
              <br /> mobile technology and creating aesthetic websites.
            </p>
            <div className="button-stack">
              <ActionButton
                text="Download CV"
                link={
                  "https://drive.google.com/file/d/1ug8E0pTO9EkIKPqMPHbkw2f3zuiAeWqa/view?usp=sharing"
                }
              />
              <IconButton
                sx={{
                  backgroundColor: "var(--gray-color)",
                  color: "var(--secondary-color)",
                  height: "54px",
                  width: "54px",
                  transition: "all 1s",
                  "&:hover": {
                    backgroundColor: "var(--secondary-color)",
                    color: "black",
                  },
                }}
              >
                <Link
                  to={"https://www.linkedin.com/in/dang-le-hai/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <LinkedInIcon />
                </Link>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "var(--gray-color)",
                  color: "var(--secondary-color)",
                  height: "54px",
                  width: "54px",
                  transition: "all 1s",
                  "&:hover": {
                    backgroundColor: "var(--secondary-color)",
                    color: "black",
                  },
                }}
              >
                <Link
                  to={"https://github.com/haidanglevn"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <GitHubIcon />
                </Link>
              </IconButton>
            </div>
          </div>
          <img src={portrait} alt="portrait" className="portrait" />
        </div>
        <div id="featured-projects" className="featured-projects">
          <div className="featured-projects-title">
            <h2>Featured Projects</h2>
            <p>
              Here are some of the most recent projects that I worked on to
              become a <br />
              full-stack developer:
            </p>
            <Button
              endIcon={<EastIcon />}
              sx={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                color: "black",
                height: "54px",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "100px",
                transition: "transform 1s",
                "& .MuiButton-endIcon": {
                  transition: "transform 1s",
                },
                "& a": {
                  color: "black",
                  marginRight: "10px",
                },
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "var(--secondary-color)",
                  "& .MuiButton-endIcon": {
                    transform: "scale(1.5)",
                  },
                },
              }}
            >
              <Link to={"/"}>See all projects</Link>
            </Button>
          </div>
          <div className="featured-projects-stack">{renderProjectCards()}</div>
        </div>
        <div className="about">
          <div className="about-title">
            <h2>About me</h2>
            <div style={{ margin: "20px 0" }}>
              <h3>I am a software developer based in Helsinki, Finland.</h3>
              <p>
                I have a Material Engineer background but decided to embark on a
                career change in 2022. I studied software development at
                Helsinki Business College and at Integrify, honing my skills
                through various team projects and internships. My tech stacks
                include React & Redux, Typescript, C# .Net Core, Firebase,
                PostgreSQL and more.
              </p>
              <Button
                endIcon={<EastIcon />}
                sx={{
                  backgroundColor: "var(--secondary-color)",
                  fontWeight: "bold",
                  color: "black",
                  height: "54px",
                  padding: "20px",
                  margin: "20px 0",
                  borderRadius: "100px",
                  transition: "transform 1s",
                  "& .MuiButton-endIcon": {
                    transition: "transform 1s",
                  },
                  "& a": {
                    color: "black",
                    marginRight: "10px",
                  },
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "var(--secondary-color)",
                    "& .MuiButton-endIcon": {
                      transform: "scale(1.5)",
                    },
                  },
                }}
              >
                <Link to={"/about"}>More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
