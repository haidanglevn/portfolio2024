import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/AboutMe.css";
import { Button, IconButton } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import portrait from "/assets/portrait.png";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ActionButton from "../components/ActionButton";

import skills from "../Skills.json";

function AboutMe() {
  return (
    <div>
      <Header />
      <div className="about-me-outline">
        <div className="about-hero">
          <div className="about-hero-left">
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
          </div>
          <div className="portrait-div">
            <img src={portrait} alt="portrait" className="portrait" />
          </div>
        </div>
        <div className="my-skills">
          <h2>My skills</h2>
          <div className="my-skills-stack">
            <div className="my-skills-stack-section">
              <h3>Front-end</h3>
              <div>
                {skills.map((skill) => {
                  if (skill.type == "front-end") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={skill.icon}
                          style={{ width: "60px", height: "60px" }}
                        />
                        <h4>{skill.name}</h4>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="my-skills-stack-section">
              <h3>Back-end</h3>
              <div>
                {skills.map((skill) => {
                  if (skill.type == "back-end") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={skill.icon}
                          style={{ width: "60px", height: "60px" }}
                        />
                        <h4>{skill.name}</h4>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="my-skills-stack-section">
              <h3>Database</h3>
              <div>
                {skills.map((skill) => {
                  if (skill.type == "database") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={skill.icon}
                          style={{ width: "60px", height: "60px" }}
                        />
                        <h4>{skill.name}</h4>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="my-skills-stack-section">
              <h3>Others</h3>
              <div>
                {skills.map((skill) => {
                  if (skill.type == "others") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={skill.icon}
                          style={{ width: "60px", height: "60px" }}
                        />
                        <h4>{skill.name}</h4>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="my-experience">
          <h2>My Experience</h2>
          <div className="my-experience-stack">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>JUNIOR WEB & MOBILE DEVELOPER</h3>
                <p>May 2023 - November 2023</p>
              </div>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Tutors Finland Oy
              </h4>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p>
                  - Worked in the 2nd version of the company mobile app SVEP
                  (https://svep.com). The app got the first round of funding and
                  around 10+ testing companies. Technologies used: React Native
                  with Typescript.
                </p>
                <p>
                  - Designed and implemented a conversion of SkillBridge
                  (https://skillsbridge.eu) website from WordPress to React.
                  Managed the project's GitHub repo and ensured the version
                  control process between teammates. Technologies used: React
                  Vite, CSS, AWS, GitHub Actions, Figma.
                </p>
                <p>
                  - Experimented and prepared an e-commerce website using
                  MedusaJS. Integrated a payment connection with Stripe and
                  VismaPay. Technologies used: NextJS for frontend, Medusa for
                  Backend, PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-education">
          <h2>My Education</h2>
          <div className="my-education-stack">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>FULL STACK DEVELOPMENT PROGRAM</h3>
                <p>Aug 2023 - Present</p>
              </div>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Integrify Academy
              </h4>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>FULL STACK WEB DEVELOPER PROGRAM</h3>
                <p>Aug 2022 - Dec 2023</p>
              </div>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Helsinki Business College
              </h4>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>BACHELOR IN ENGINEERING</h3>
                <p>Aug 2015 - Dec 2020</p>
              </div>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Arcada University of Applied Sciences
              </h4>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
