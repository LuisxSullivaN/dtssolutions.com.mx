import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Title from '../../../components/Title'
import Image from '../../../components/Image'
import Feature from '../../../components/Feature'
import cloudComputing from '../../../assets/img/cloud_computing.png'

const CloudComputing = () => {
  const features = [
    'Infraestructura',
    'Almacenamiento',
    'Migración',
    'Bases de Datos',
    'Contenedores',
    'Serverless',
    'DevOps',
    'Arquitectura',
    'API'
  ]

  return (
    <Box paddingY={8} bgcolor="secondary.main" color="secondary.contrastText">
      <Container>
        <Grid container spacing={4} alignItems="center" direction="row-reverse">
          <Grid item md={6}>
            <Image src={cloudComputing} />
          </Grid>
          <Grid item md={6}>
            <Box marginTop={3}>
              <Title gutterBottom>Cloud Computing</Title>
            </Box>
            <Typography paragraph>
              Asesoramos y brindamos las mejores alternativas para iniciar, adoptar
              e implementar soluciones y servicios avanzados en la gestión de
              plataformas cloud y entornos híbridos.
            </Typography>
            <Typography paragraph>
              Garantizamos en todo momento la continuidad del negocio y facilitamos
              el desarrollo nativo de aplicaciones en la nube con las ventajas de
              flexibilidad, escalabilidad y alta disponibilidad.
            </Typography>
            <Typography paragraph>
              Nuestro portafolio de soluciones de Cloud Computing está desarrollado
              con tecnología de{' '}
              <Box display="inline" fontWeight="fontWeightBold">
                Amazon Web Services
              </Box>{' '}
              incluyendo:
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item>
                  <Feature key={index} text={feature} iconColor="secondary.light" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CloudComputing
