import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Image from '../../../components/Image'
import apnImg from '../../../assets/img/apn.png'

const Partner = () => (
  <Box marginTop={8}>
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY={12}
      >
        <Image src={apnImg} />
        <Box marginTop={3} marginBottom={2}>
          <Typography variant="body2" align="center">
            Los socios consultores de AWS son empresas de servicios profesionales,
            administrados o de consultoría que ayudan a los clientes de todo tipo
            y tamaño a agilizar la adopción de la nube.
          </Typography>
        </Box>
        <Typography variant="h5">Somos AWS Consulting Partner</Typography>
      </Box>
    </Container>
  </Box>
)

export default Partner
