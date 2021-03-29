import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import Title from '../../components/Title'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from '../../components/Image'
import buildings from '../../assets/img/buildings.jpg'

const AboutPage = () => (
  <>
    <Navbar selectedIndex={2} />
    <Box
      height={300}
      style={{
        backgroundImage: `url(${buildings})`,
        backgroundPosition: 'center'
      }}
    ></Box>
    <Container maxWidth="md">
      <Box marginTop={3} align="center">
        <Title gutterBottom>¿Quienes somos?</Title>
        <Typography paragraph>
          DTS Solutions (Digital transformation Specialist) Somos un grupo de
          especialistas con más de 10 años de experiencia en el sector
          tecnológico, apasionados por brindar soluciones enfocadas en utilizar
          la tecnología como una ventaja competitiva, alineado siempre a los
          objetivos de negocios de cada empresa.
        </Typography>
        <Typography paragraph>
          Nuestro propósito principal es ofrecer servicios con lo último en
          vanguardia tecnológica e innovación, siguiendo siempre los más altos
          estándares de calidad y garantizando en todo momento la fiabilidad y
          seguridad de la información.
        </Typography>
      </Box>
      <Box
        marginTop={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={1}
      >
        <Box marginTop={1} marginRight={0.5}>
          <CheckCircleIcon color="primary" />
        </Box>
        <Title>Misión</Title>
      </Box>
      <Typography align="center">
        Ser un socio estratégico de negocio para las empresas que busquen
        adoptar e incluir la transformación digital dentro de sus procesos de
        negocio.
      </Typography>
      <Box
        marginTop={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={1}
      >
        <Box marginTop={1} marginRight={0.5}>
          <CheckCircleIcon color="primary" />
        </Box>
        <Title>Visión</Title>
      </Box>
      <Typography align="center">
        Ser un socio estratégico de negocio para las empresas que busquen
        adoptar e incluir la transformación digital dentro de sus procesos de
        negocio.
      </Typography>
      <Box
        marginTop={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={1}
      >
        <Box marginTop={1} marginRight={0.5}>
          <CheckCircleIcon color="primary" />
        </Box>
        <Title>Valores</Title>
      </Box>
      <Typography align="center">
        Innovación, excelencia, pasión, ética y compromiso.
      </Typography>
      <Typography align="center">¡Eso define a DTS Solutions!</Typography>
    </Container>
    <Footer />
  </>
)

export default AboutPage
