import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CloudDoneIcon from '@material-ui/icons/CloudDone'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic'
import GroupIcon from '@material-ui/icons/Group'

import Title from '../../../components/Title'
import TextColor from '../../../components/TextColor'
import BenefitCard from '../../../components/BenefitCard'

const Benefits = () => {
  const benefits = [
    {
      headline: 'Servicios especializados',
      body: `Contamos con un servicio administrador cloud para que puedas
            enfocarte en el core de tu negocio y así evitar la
            administración de sistemas.`,
      icon: <CloudDoneIcon />,
      color: 'info'
    },
    {
      headline: 'Desarrollo de estrategias',
      body: `Te ayudamos a optimizar los costos de infraestructura y
            agilizar la innovación mediante la migración de cargas de
            trabajo y aplicaciones a la nube.`,
      icon: <WbIncandescentIcon />,
      color: 'warning'
    },
    {
      headline: 'Atención y seguimiento',
      body: `Te acompañamos durante el proceso de adaptación y
            evolución a esta nueva era digital con un enfoque propio e
            integral aportando valor y experiencia.`,
      icon: <HeadsetMicIcon />,
      color: 'success'
    },
    {
      headline: 'Equipo dedicado',
      body: `Contamos con ingenieros especializados y
            certificados para diseñar arquitecturas y planes estratégicos
            acorde a los requerimientos de tu negocio.`,
      icon: <GroupIcon />,
      color: 'error'
    }
  ]

  return (
    <Container component="section">
      <Box marginTop={12} marginBottom={5}>
        <Title variant="h3" align="center">
          Nuestros <TextColor color="secondary">Beneficios</TextColor>
        </Title>
      </Box>
      <Grid container spacing={3} justify="center" alignItems="center">
          {benefits.map((benefit, index) => (
              <Grid item>
                <BenefitCard key={index} {...benefit} />
              </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default Benefits
