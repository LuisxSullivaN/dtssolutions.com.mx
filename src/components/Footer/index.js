import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

const Footer = () => {
  const theme = useTheme()
  const medium = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      marginTop={8}
      paddingY={3}
      bgcolor="primary.main"
      color="primary.contrastText"
      component="footer"
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        direction={medium ? 'row' : 'column'}
      >
        <Grid item md={4}>
          <Box display="flex" justifyContent="center">
            <IconButton
              size="small"
              color="inherit"
              href="https://api.whatsapp.com/send?phone=52 1 33 1437 9029"
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              href="https://www.linkedin.com/company/dts-solutions-digital-transformation-specialist/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box marginY={2}>
            <Typography align="center">
              Av. de las Américas 1254
              <br />
              Country Clubs
              <br />
              44610 Guadalajara, Jal.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box display="flex" justifyContent="center">
            <PhoneIcon />
            <Box marginLeft={1}>
              <Typography>+52 5541662988</Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <EmailIcon />
            <Box marginLeft={1}>
              <Typography>contacto@dtssolutions.com.mx</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Footer
