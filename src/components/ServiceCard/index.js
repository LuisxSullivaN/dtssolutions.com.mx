import { makeStyles, withTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import ServiceIcon from '../ServiceIcon'

const useStyles = makeStyles({
  button: ({ theme, color }) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor:
      color === 'info'
        ? theme.palette.info.main
        : color === 'warning'
        ? theme.palette.warning.main
        : color === 'success'
        ? theme.palette.success.main
        : '',
    color:
      color === 'info'
        ? theme.palette.info.main
        : color === 'warning'
        ? theme.palette.warning.main
        : color === 'success'
        ? theme.palette.success.main
        : '',
    '&:hover': {
      borderColor:
      color === 'info'
        ? theme.palette.info.dark
        : color === 'warning'
        ? theme.palette.warning.dark
        : color === 'success'
        ? theme.palette.success.dark
        : '',
    }
  })
})

const ServiceCard = ({ theme, headline, body, icon, color }) => {
  const classes = useStyles({ theme, color })

  return (
    <Box marginTop={3} maxWidth={420}>
      <Card variant="outlined">
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ServiceIcon icon={icon} color={color} />
            <Typography variant="h5" gutterBottom align="center">
              {headline}
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              {body}
            </Typography>
            <CardActions>
              <Button
                className={classes.button}
                color={color}
              >
                Leer Más
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default withTheme(ServiceCard)
