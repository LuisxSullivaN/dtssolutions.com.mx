import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import CloudDoneIcon from '@material-ui/icons/CloudDone'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import GroupIcon from '@material-ui/icons/Group'

import Title from '../../components/Title'
import TextColor from '../../components/TextColor'

const Benefits = ({ theme }) => {
  const benefits = [
    {
      heading: 'Servicios especializados',
      body:
        'Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.',
      icon: <CloudDoneIcon fontSize="large" color="primary" />
    },
    {
      heading: 'Desarrollo de estrategias',
      body:
        'Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.',
      icon: <WbIncandescentIcon fontSize="large" color="primary" />
    },
    {
      heading: 'Facturación',
      body:
        'Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.',
      icon: <MonetizationOnIcon fontSize="large" color="primary" />
    },
    {
      heading: 'Equipo Dedicado',
      body:
        'Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.',
      icon: <GroupIcon fontSize="large" color="primary" />
    }
  ]
  return (
    <Container component="section">
      <Title variant="h3" align="center">
        Nuestros <TextColor color="secondary">Beneficios</TextColor>
      </Title>
      {benefits.map(benefit => (
        <Card>
          <CardContent>
            <Box display="flex">
              {benefit.icon}
              <Box ml={2}>
                <Typography variant="h5">{benefit.heading}</Typography>
                <Typography variant="body2">{benefit.body}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default Benefits
