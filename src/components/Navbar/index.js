import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import InfoIcon from '@material-ui/icons/Info'
import BookIcon from '@material-ui/icons/Book'

import Title from '../Title'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => setOpen(!isOpen)

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Box
            width={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title variant="h1">DTS Solutions</Title>
            <IconButton edge="end" color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer anchor="right" open={isOpen} onClose={handleOpen}>
            <List>
              <ListItem button selected>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText primary="Soluciones" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Nosotros" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Navbar
