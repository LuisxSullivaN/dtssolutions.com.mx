import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Title from '../../../components/Title'
import Feature from '../../../components/Feature'
import Image from '../../../components/Image'
import ecommerce from '../../../assets/img/ecommerce.png'

const Ecommerce = () => {
  const features = [
    `Soporte, dudas o inquietudes sobre tu plataforma de comercio electrónico
    digital`,
    `Respaldo de tus bases de datos`,
    `Actualización de contenido y catálogos de servicios`
  ]

  return (
    <Container component="section">
      <Box paddingY={8}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6}>
            <Image src={ecommerce} />
          </Grid>
          <Grid item md={6}>
            <Box marginTop={3}>
              <Title variant="h2" gutterBottom>
                E-commerce
              </Title>
            </Box>
            <Typography paragraph>
              Incluimos un análisis exhaustivo previo para identificar la
              necesidad puntual del requerimiento, a fin de personalizar el sitio
              acorde a la operabilidad y funcionalidad esperada.
            </Typography>
            <Typography paragraph>
              El procesamiento de pago que ofrecemos comprende la integración de
              diferentes esquemas y aceptación de múltiples tipos de pago, como
              tarjetas de crédito, débito, PayPal, etc.
            </Typography>
            <Typography paragraph>
              Además, contamos con un{' '}
              <Box fontWeight="fontWeightBold" component="span">
                servicio administrado de e-commerce
              </Box>
              :
            </Typography>
            {features.map((feature, index) => (
              <Box marginTop={1}>
                <Feature key={index} text={feature} iconColor="primary.light" />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Ecommerce
