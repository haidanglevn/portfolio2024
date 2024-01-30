import {React, useState} from 'react'
import { Button } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

function ActionButton({text, link}) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
        <Button
        endIcon={isHovered ? <ArrowOutwardIcon /> : <CircleIcon />}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          backgroundColor: "var(--secondary-color)",
          fontWeight:'bold',
          color: 'black',
          height: '54px',
          padding:'20px',
          borderRadius:'100px',
          transition: 'transform 1s',
          '& .MuiButton-endIcon': {
            transition: 'transform 1s',
          },
          '& a': {
            color:'black',
            marginRight:'10px'
          },
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: "var(--secondary-color)",
            '& .MuiButton-endIcon': {
              transform: 'scale(1.5)',
            },
          },
        }}
      >
        <Link to={link}>{text}</Link>
      </Button>
  )
}

export default ActionButton