import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  icon: {
    color: ({ theme, color }) =>
      color === 'info'
        ? theme.palette.info.main
        : color === 'warning'
        ? theme.palette.warning.main
        : color === 'success'
        ? theme.palette.success.main
        : color === 'error'
        ? theme.palette.error.main
        : ''
  }
})

const BenefitCard = ({ theme, headline, body, icon, color }) => {
  const classes = useStyles({ theme, color })

  return (
    <Box maxWidth={500}>
      <Card raised>
        <CardContent>
          <Box display="flex">
            {React.cloneElement(icon, {
              className: classes.icon,
              fontSize: 'large'
            })}
            <Box ml={2}>
              <Typography variant="h5" gutterBottom>
                {headline}
              </Typography>
              <Typography variant="body2">{body}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
export default withTheme(BenefitCard)
