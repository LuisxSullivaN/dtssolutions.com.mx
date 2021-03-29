import { withTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import ChatIcon from '@material-ui/icons/Chat'

import Form from '../../components/Form'
import Feature from '../../components/Feature'

const ContactPage = ({ theme }) => {
  const features = [
    `Liberar cargas de trabajo en la nube de AWS y concentrarte en
    el core de tu negocio`,
    `Conseguir desarrollo de software a la medida diseñado con tus requerimientos
    en mente`,
    `Obtener tu plataforma de comercio digital completamente personalizada`
  ]


  return (
    <>
      <Navbar selectedIndex={3} />
      <main>
        <Container maxWidth="md">
          <Box marginTop={3} paddingY={4}>
            <Title align="center" color="primary" gutterBottom>
              ¡Contacta a nuestro equipo de ventas!
            </Title>
            <Typography align="center" paragraph>
              Nuestro equipo está a la disposición de responder tus dudas. Llena
              el formulario y nos pondremos en contacto contigo lo más pronto
              posible.
            </Typography>
          </Box>
        </Container>
        <Box paddingX={3} marginTop={4} paddingY={8} bgcolor="secondary.main">
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item md={6}>
              <Box align="center">
                <Form />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box marginTop={6}>
                <Typography
                  style={{
                    color: theme.palette.secondary.contrastText
                  }}
                >
                  Con DTS Solutions tú puedes:
                </Typography>
              </Box>
              <Box marginTop={3}>
                {features.map((feature, index) => (
                  <Box marginTop={1}>
                    <Feature
                      key={index}
                      text={feature}
                      iconColor="secondary.light"
                      textColor="secondary.contrastText"
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box bgcolor="secondary.dark" paddingY={8} paddingX={3}>
          <ChatIcon
            fontSize="large"
            style={{ color: theme.palette.secondary.contrastText }}
          />
          <Box marginTop={1}>
            <Typography
              style={{
                color: theme.palette.secondary.contrastText
              }}
              gutterBottom
            >
              Comunicación general
            </Typography>
          </Box>
          <Typography style={{ color: theme.palette.secondary.contrastText }}>
            Para consultas generales, incluyendo oportunidades de alianza, por
            favor comunícate en{' '}
            <Box fontWeight="fontWeightBold" component="span">
              contacto@dtssolutions.com.mx
            </Box>
          </Typography>
        </Box>
      </main>
    </>
  )
}

export default withTheme(ContactPage)
