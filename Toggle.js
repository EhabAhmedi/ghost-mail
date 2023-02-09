import { ThemeContext } from './App.js'
import React, { useContext } from 'react'
import { Button } from '@mui/material';
import logo from "./assets/logo.png"



 
function Toggle() {
  const {theme,setTheme} = useContext(ThemeContext)
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light" ? "dark":"light"))
  };
 
  return (
    <Button  className='logoBtn__wrapper'>
    <img  onClick={toggleTheme} checked={theme==="dark"} className="dark__logobtn" src={logo}  alt="" />
    <p > {theme==="light" ?"Light " : "Dark "}</p>

    </Button>
  )
}

export default Toggle