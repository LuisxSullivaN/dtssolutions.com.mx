import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: ({ theme }) => `1px solid ${theme.palette.text.secondary}`
  },
  icon: {
    fontSize: '50px',
    color: ({ theme, color }) =>
      color === 'info'
        ? theme.palette.info.light
        : color === 'warning'
        ? theme.palette.warning.light
        : color === 'success'
        ? theme.palette.success.light
        : theme.palette.text.primary
  }
})

const ServiceIcon = ({ theme, icon, color }) => {
  const classes = useStyles({ theme, color })

  return (
    <Box className={classes.root} marginY={2}>
      {React.cloneElement(icon, { className: classes.icon })}
    </Box>
  )
}

export default withTheme(ServiceIcon)
