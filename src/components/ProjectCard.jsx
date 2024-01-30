import { Button, Stack } from '@mui/material'
import React from 'react'
import "../styles/ProjectCard.css"

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub'

import ecomecho from '../assets/ecomecho.png'

function ProjectCard() {
    
  return (
    <div className='project-card'>
        <div className='project-card-img'><img src={ecomecho}></img></div>
        <div className='project-card-info'>
            <h3>Promotional landing page for our favorite show</h3>
            <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
            <Stack sx={{marginTop:'10px'}}>
                <Stack sx={{borderBottom:"1px solid white", padding: '10px 0', fontWeight:'bold'}}><h4>PROJECT INFO</h4></Stack>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{borderBottom:"1px solid white", padding: '10px 0'}}><h4>Year</h4><p>Year</p></Stack>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{borderBottom:"1px solid white", padding: '10px 0'}}><h4>Role</h4><p>Role</p></Stack>
            </Stack>
            <Stack direction={'row'} gap={'20px'} alignItems={'flex-start'} margin={'20px 0'}>
                <Button endIcon={<ArrowOutwardIcon/>} 
                    sx={{
                    backgroundColor: "none",
                    fontWeight:'bold',
                    color: 'var(--secondary-color)',
                    borderBottom:'2px solid var(--secondary-color)',
                    borderRadius: '0'
                    }}>
                Live Demo</Button>
                <Button endIcon={<GitHubIcon/>} 
                    sx={{
                    backgroundColor: "none",
                    fontWeight:'bold',
                    color: 'var(--secondary-color)',
                    borderBottom:'2px solid var(--secondary-color)',
                    borderRadius: '0'
                    }}>
                GitHub Repo</Button>
            </Stack>
        </div>

    </div>
  )
}

export default ProjectCard