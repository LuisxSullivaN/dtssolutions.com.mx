import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Title from '../../components/Title'
import TextColor from '../../components/TextColor'
import Image from '../../components/Image'
import hind from '../../assets/img/hind.svg'
import elektra from '../../assets/img/elektra.svg'
import lacasa from '../../assets/img/lacasa_logo.svg'
import marcopolo from '../../assets/img/marcopolo.svg'
import ferreroRocher from '../../assets/img/ferrero_rocher.svg'
import essity from '../../assets/img/essity.svg'

const Clients = () => {
  return (
    <Container>
      <Title variant="h3" align="center">
        Algunos de nuestros <TextColor color="secondary">clientes</TextColor>
      </Title>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" justifyContent="space-around">
          <Image src={hind} width={140} height={70} />
          <Image src={elektra} width={140} height={70} />
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Image src={marcopolo} width={140} height={70} />
          <Image src={lacasa} width={140} height={70} />
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Image src={ferreroRocher} width={140} height={70} />
          <Image src={essity} width={140} height={70} />
        </Box>
      </Box>
    </Container>
  )
}

export default Clients
