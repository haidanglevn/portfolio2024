import React from 'react'
import Header from '../components/Header'
import "../styles/Home.css"
import portrait from '../assets/portrait.png'
import ActionButton from '../components/ActionButton'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <div className='home-outline'>
        <div className="hero">
          <div className='hero-left'>
            <h1>Dang, <br /> let's code!</h1>
            <p>A Helsinki based full-stack developer with passion for consumer <br /> mobile technology and creating aesthetic websites.</p>
            <div className='button-stack'>
              <ActionButton text="Contact Me"/>
              <IconButton sx={{
                backgroundColor:'var(--gray-color)',
                color:'var(--secondary-color)',
                height: '54px',
                width:'54px',
                transition: 'all 1s',
                '&:hover': {
                  backgroundColor: "var(--secondary-color)",
                  color:'black'
                },
                }}>
                <LinkedInIcon/>
              </IconButton>
              <IconButton sx={{
                backgroundColor:'var(--gray-color)',
                color:'var(--secondary-color)',
                height: '54px',
                width:'54px',
                transition: 'all 1s',
                '&:hover': {
                  backgroundColor: "var(--secondary-color)",
                  color:'black'
                },
                }}>
                <GitHubIcon/>
              </IconButton>
            </div>
          </div>
          <img src={portrait} alt="portrait" className='portrait'/>
        </div>
        <div className='featured-projects'>
          <div className='featured-projects-title'>
            <h2>Featured Projects</h2>
            <p>Here are some of the most recent projects that I worked on to become a <br />full-stack developer:</p>
          </div>
          <div className='featured-projects-stack'>
            <ProjectCard/> 
            <ProjectCard/> 
            <ProjectCard/> 
            <ProjectCard/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home