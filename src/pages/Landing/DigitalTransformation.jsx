import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CloudIcon from '@material-ui/icons/Cloud'

import Title from '../../components/Title'
import TextColor from '../../components/TextColor'

const DigitalTransformation = () => (
  <Container component="section">
    <Title variant="h3" align="center">
      Adopta la <TextColor color="secondary">Transformación Digital</TextColor>
    </Title>
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CloudIcon fontSize="large" color="primary" />
          <Typography variant="h5" align="center" gutterBottom>
            Cloud Computing Consulting
          </Typography>
          <CardActions>
            <Button variant="outlined" color="primary">
              Leer Más
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CloudIcon fontSize="large" color="primary" />
          <Typography variant="h5" align="center" gutterBottom>
            Desarrollo de Software
          </Typography>
          <CardActions>
            <Button variant="outlined" color="primary">
              Leer Más
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CloudIcon fontSize="large" color="primary" />
          <Typography variant="h5" align="center" gutterBottom>
            E-commerce
          </Typography>
          <CardActions>
            <Button variant="outlined" color="primary">
              Leer Más
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  </Container>
)

export default DigitalTransformation
