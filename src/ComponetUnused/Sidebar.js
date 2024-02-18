import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const Sidebar = () => {
  return (
    <Paper contained elevation={10} sx={{height:'700vh'}}>
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
         
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
        
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
    </Paper>
    
  )
}

export default Sidebar