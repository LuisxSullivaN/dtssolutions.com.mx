import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Title from '../../components/Title'
import TextColor from '../../components/TextColor'
import Image from '../../components/Image'
import customerSupport from '../../assets/img/customer_support.jpg'

const CustomerSupport = () => {
  return (
    <Container>
      <Title variant="h3">
        Guíamos tu negocio con nuestro modelo de{' '}
        <TextColor color="secondary">atención al cliente</TextColor>
      </Title>
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        hic odio voluptatem tenetur consequatur. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia.
      </Typography>
      <Button variant="outlined" color="secondary">
        Leer más
      </Button>
      <Image src={customerSupport} />
    </Container>
  )
}

export default CustomerSupport
