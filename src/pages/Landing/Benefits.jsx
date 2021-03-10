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

const Benefits = () => (
  <Container component="section">
    <Title variant="h3" align="center">
      Nuestros <TextColor color="secondary">Beneficios</TextColor>
    </Title>
    <Card>
      <CardContent>
        <Box display="flex">
          <CloudDoneIcon fontSize="large" color="primary" />
          <Box ml={2}>
            <Typography variant="h5">Servicios especializados</Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Box display="flex">
          <WbIncandescentIcon fontSize="large" color="primary" />
          <Box ml={2}>
            <Typography variant="h5">Desarrollo de estrategias</Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Box display="flex">
          <MonetizationOnIcon fontSize="large" color="primary" />
          <Box ml={2}>
            <Typography variant="h5">Facturación</Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Box display="flex">
          <GroupIcon fontSize="large" color="primary" />
          <Box ml={2}>
            <Typography variant="h5">Equipo dedicado</Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Container>
)

export default Benefits
