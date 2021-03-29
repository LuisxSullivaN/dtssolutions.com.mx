import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Title from '../../../components/Title'
import TextColor from '../../../components/TextColor'
import Image from '../../../components/Image'
import hind from '../../../assets/img/clients/hind.svg'
import elektra from '../../../assets/img/clients/elektra.svg'
import lacasa from '../../../assets/img/clients/lacasa_logo.svg'
import marcopolo from '../../../assets/img/clients/marcopolo.svg'
import ferreroRocher from '../../../assets/img/clients/ferrero_rocher.svg'
import essity from '../../../assets/img/clients/essity.svg'

const OurClients = () => (
  <Container component="section">
    <Box marginTop={8} marginBottom={5}>
      <Title variant="h3" align="center">
        Algunos de nuestros <TextColor color="secondary">clientes</TextColor>
      </Title>
    </Box>
    <Grid container justify="center" spacing={3}>
      <Grid item>
        <Image src={hind} width={140} height={70} />
      </Grid>
      <Grid item>
        <Image src={elektra} width={140} height={70} />
      </Grid>
      <Grid item>
        <Image src={marcopolo} width={140} height={70} />
      </Grid>
      <Grid item>
        <Image src={lacasa} width={140} height={70} />
      </Grid>
      <Grid item>
        <Image src={ferreroRocher} width={140} height={70} />
      </Grid>
      <Grid item>
        <Image src={essity} width={140} height={70} />
      </Grid>
    </Grid>
  </Container>
)

export default OurClients
