

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card3 = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="Camel"
      height="140"
      image={process.env.PUBLIC_URL +"/assets/C45f3LZsk7Da4bJ2tYDpaF-1200-80.jpg"}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Camel
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Card3