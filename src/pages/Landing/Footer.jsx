import { makeStyles, withTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

const useStyles = makeStyles({
  root: {
    backgroundColor: theme => theme.palette.primary.main
  }
})

const Footer = ({ theme }) => {
  const classes = useStyles(theme)

  return (
    <Container className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Box>
          <IconButton size="small">
            <WhatsAppIcon color="textPrimary" />
          </IconButton>
          <IconButton size="small">
            <LinkedInIcon color="textPrimary" />
          </IconButton>
        </Box>
        <Typography paragraph align="center">
          Av. de las Américas 1254
          <br />
          Country Clubs
          <br />
          44610 Guadalajara, Jal.
        </Typography>
        <Box display="flex">
          <PhoneIcon />
          <Typography>+52 5541662988</Typography>
        </Box>
        <Box display="flex">
          <EmailIcon />
          <Typography>contacto@dtssolutions.com.mx</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default withTheme(Footer)
