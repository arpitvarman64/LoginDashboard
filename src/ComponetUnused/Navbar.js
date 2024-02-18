import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

import React from 'react'
import MenuBar from './MenuBar'
import {  useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate()
  const DeleteData = ()=>{
    localStorage.clear();
navigate("/")
  }
  return (
    
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
        color='error'
      >
        <MenuBar />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button variant='contained' color="error" onClick={DeleteData}>Logout</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar