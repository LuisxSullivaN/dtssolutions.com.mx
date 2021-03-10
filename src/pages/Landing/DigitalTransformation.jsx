import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CheckIcon from '@material-ui/icons/Check'
import CloudIcon from '@material-ui/icons/Cloud'

import Title from '../../components/Title'
import TextColor from '../../components/TextColor'

const useStyles = makeStyles({
  subtitle: {
    fontSize: '24px'
  }
})

const DigitalTransformation = () => {
  const classes = useStyles()

  const cards = [
    {
      title: 'Cómputo en la nube',
      checkTexts: [
        'Servicios Admnistrados',
        'Falla rápido y económico',
        'Mejora tu retorno de inversión',
        'Paga por uso'
      ]
    },
    {
      title: 'Desarrollo de software',
      checkTexts: [
        'Software a la medida',
        'Soluciones completas',
        'Backend Serverless',
        'Tecnología adaptativa'
      ]
    }
  ]

  return (
    <Container component="section">
      <Title variant="h3" align="center">
        Adopta la{' '}
        <TextColor color="secondary">Transformación Digital</TextColor>
      </Title>
      {cards.map(card => (
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CloudIcon fontSize="large" color="primary" />
              <Typography
                className={classes.subtitle}
                variant="subtitle1"
                component="h4"
                align="center"
                gutterBottom
              >
                {card.title}
              </Typography>
              <Box>
                {card.checkTexts.map(text => (
                  <Box display="flex" alignItems="center">
                    <CheckIcon color="primary" />
                    <Typography>{text}</Typography>
                  </Box>
                ))}
              </Box>
              <CardActions>
                <Button variant="contained" color="primary">
                  Leer Más
                </Button>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default DigitalTransformation
