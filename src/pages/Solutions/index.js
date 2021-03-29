import { Link as BrowserLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Ecommerce from './Ecommerce'
import SoftwareDevelopment from './SoftwareDevelopment'
import CloudComputing from './CloudComputing'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

const SolutionsPage = () => {

  return (
    <>
      <Navbar selectedIndex={1} />
      <Container>
        <Box align="center">
          <Box marginTop={3}>
            <Title gutterBottom>
              Nuestras{' '}
              <Box color="secondary.main" component="span">
                Soluciones
              </Box>
            </Title>
          </Box>
          <Typography paragraph>
            Adopta la transformación digital mediante las soluciones que tenemos
            para ti.
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={BrowserLink}
            to="/contacto"
          >
            ¡Contáctanos!
          </Button>
        </Box>
      </Container>
        <main>
          <SoftwareDevelopment />
          <CloudComputing />
          <Ecommerce />
        </main>
      <Footer />
    </>
  )
}

export default SolutionsPage
