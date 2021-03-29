import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Title from '../../../components/Title'
import Feature from '../../../components/Feature'
import Image from '../../../components/Image'
import software from '../../../assets/img/software.png'

const SoftwareDevelopment = () => (
  <Container component="section">
    <Box paddingY={8}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={6}>
          <Image src={software} />
        </Grid>
        <Grid item md={6}>
          <Box marginTop={3}>
            <Title gutterBottom>Desarrollo de Software</Title>
          </Box>
          <Typography paragraph>
            Nos especializamos en desarrollar soluciones tanto de aplicaciones
            web como aplicaciones móviles personalizadas a la medida.
          </Typography>
          <Feature
            text="Desarrollo móvil multiplataforma:"
            iconColor="primary.main"
          />
          <Box marginTop={0.5}>
            <Typography paragraph>
              Contamos con experiencia desarrollando aplicaciones móviles que se
              puedan ejecutar tanto en Android como IOS.
            </Typography>
          </Box>
          <Feature text="Desarrollo de ERP:" iconColor="primary.main" />
          <Box marginTop={0.5}>
            <Typography paragraph>
              Diseñamos e implementamos software ERP para el control y manejo de
              procesos empresariales.
            </Typography>
          </Box>
          <Feature text="Diseño de APIs:" iconColor="primary.main" />
          <Box marginTop={0.5}>
            <Typography>
              Manejamos una variedad de lenguajes y plataformas como NodeJS,
              Java, PHP, entre otros para el desarrollo de APIs REST.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
)

export default SoftwareDevelopment
