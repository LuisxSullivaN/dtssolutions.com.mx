import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'

import Title from '../Title'
import Image from '../Image'
import logo from '../../assets/img/logo.png'

const useStyles = makeStyles({
  list: {
    width: 200
  },
  selected: {
    fontWeight: 'bold'
  }
})

const Navbar = ({ theme, selectedIndex = 0 }) => {
  const classes = useStyles(theme)
  const [isOpen, setOpen] = useState(false)

  const items = [
    { text: 'Inicio', path: '/' },
    { text: 'Soluciones', path: '/soluciones' },
    { text: 'Nosotros', path: '/nosotros' },
    { text: 'Contacto', path: '/contacto' },
    { text: 'Blog', path: '/blog' }
  ]

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
            <Title variant="h1" style={{ fontSize: 17 }}>
              <Link
                color="inherit"
                underline="none"
                component={RouterLink}
                to="/"
              >
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Image src={logo} width={45} />
                  DTS Solutions
                </Box>
              </Link>
            </Title>
            <IconButton edge="end" color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer anchor="right" open={isOpen} onClose={handleOpen}>
            <List className={classes.list}>
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  button
                  selected={index === selectedIndex}
                  component={RouterLink}
                  to={item.path}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      align: 'center',
                      color: index === selectedIndex ? 'primary' : 'initial'
                    }}
                    classes={{
                      primary: index === selectedIndex ? classes.selected : ''
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default withTheme(Navbar)
