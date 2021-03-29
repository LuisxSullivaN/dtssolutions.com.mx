import { Link as BrowserLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Title from '../Title'
import TextColor from '../TextColor'
import Image from '../Image'
import city from '../../assets/img/city.jpg'

const Banner = () => (
  <Container>
    <Grid container spacing={3} alignItems="center">
      <Grid item md={6}>
        <Box marginTop={6}>
          <Title variant="h2" gutterBottom>
            Líderes en{' '}
            <TextColor color="secondary">Innovación Digital.</TextColor>
          </Title>
        </Box>
        <Typography variant="subtitle1" paragraph>
          Somos expertos en brindar la asesoría que requiere tu negocio para
          implementar un modelo digital eficaz a través de la innovación y
          habilitación del uso de tecnologías digitales.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ChevronRightIcon />}
          component={BrowserLink}
          to="/soluciones"
        >
          Ver soluciones
        </Button>
        <Box display="inline-block" marginLeft={1}>
          <Button
            variant="outlined"
            color="secondary"
            component={BrowserLink}
            to="/contacto"
          >
            ¡Contáctanos!
          </Button>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box marginTop={3}>
          <Image src={city} />
        </Box>
      </Grid>
    </Grid>
  </Container>
)

export default Banner
