import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/AboutMe.css";
import { Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import portrait from "/assets/cvcrop.png";

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
          <div className="portrait-div">
            <img src={portrait} alt="portrait" className="portrait" />
          </div>
          <div className="about-hero-left">
            <div style={{ margin: "20px 0" }}>
              <h3>I am a software developer based in Helsinki, Finland.</h3>
              <p>
                I have a Material Engineer background but decided to embark on a
                career change in 2022. I studied software development at
                Helsinki Business College and at Integrify, honing my skills
                through various team projects and internships. My tech stacks
                include{" "}
                <span>
                  React & Redux, Typescript, C# .Net Core, Firebase, PostgreSQL
                </span>{" "}
                and more.
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
        </div>
        <div className="my-skills">
          <h2>My skills</h2>
          <div className="my-skills-stack">
            <div className="my-skills-stack-section">
              <h3>Front-end</h3>
              <div>
                {skills.map((skill, index) => {
                  if (skill.type == "front-end") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                        key={index}
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
                {skills.map((skill, index) => {
                  if (skill.type == "back-end") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                        key={index}
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
                {skills.map((skill, index) => {
                  if (skill.type == "database") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                        key={index}
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
                {skills.map((skill, index) => {
                  if (skill.type == "others") {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                        key={index}
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
              <div className="my-experience-stack-header">
                <div>
                  <h3>JUNIOR WEB & MOBILE DEVELOPER</h3>
                  <h4
                    style={{
                      color: "var(--secondary-color)",
                      marginBottom: "10px",
                    }}
                  >
                    Tutors Finland Oy
                  </h4>
                </div>

                <p>May 2023 - November 2023</p>
              </div>

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
            <div>
              <ActionButton
                link={
                  "https://drive.google.com/file/d/1r83C1vLvOS20020jv6HdWTjBuzmZs2H-/view?usp=sharing"
                }
                text={"Read Testimonial"}
              />
            </div>
          </div>
        </div>
        <div className="my-education">
          <h2>My Education</h2>
          <div className="my-education-stack">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                title="Click to see certification"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1lwG6ahoUK723W1t2DOuR33Xq81Z1NvMH/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <h3>FULL STACK DEVELOPMENT PROGRAM</h3>
                <p>Aug 2023 - Jan 2024</p>
              </div>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Integrify Academy
              </h4>
            </div>
            <ul></ul>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Information and Communications Technology</h3>
                <p>Aug 2022 - Dec 2023</p>
              </div>
              <h4>Vocational Qualification (180cr)</h4>
              <h4
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Helsinki Business College
              </h4>
            </div>
            <ul></ul>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Material Processing Technology</h3>
                <p>Aug 2015 - Dec 2020</p>
              </div>
              <h4>Bachelor of Engineering</h4>
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
