import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Title from '../Title'
import TextColor from '../TextColor'
import Image from '../Image'
import city from '../../assets/img/city.jpg'

const Banner = () => {
  return (
    <Container>
      <Title variant="h2" gutterBottom>
        Líderes en <TextColor color="secondary">Innovación Digital.</TextColor>
      </Title>
      <Typography variant="subtitle1" paragraph>
        Somos expertos en brindar la asesoría que requiere tu negocio para
        implementar un modelo digital eficaz a través de la innovación y
        habilitación del uso de tecnologías digitales.
      </Typography>
      <Button variant="contained" color="secondary">
        Conoce nuestras soluciones
      </Button>
      <Image src={city} />
    </Container>
  )
}

export default Banner
