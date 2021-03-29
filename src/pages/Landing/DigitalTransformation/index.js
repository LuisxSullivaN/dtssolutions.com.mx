import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CloudIcon from '@material-ui/icons/Cloud'
import CodeIcon from '@material-ui/icons/Code'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import Title from '../../../components/Title'
import TextColor from '../../../components/TextColor'
import ServiceCard from '../../../components/ServiceCard'

const DigitalTransformation = () => {
  const services = [
    {
      headline: 'Desarrollo de Software',
      body: `Desarrollamos aplicaciones a la medida con un enfoque innovador de
      ingeniería de software y tecnología de última generación`,
      icon: <CodeIcon />,
      color: 'info'
    },
    {
      headline: 'Cloud Computing Consulting',
      body: `Opera los recursos de TI desde la nube con tecnología escalable,
      segura, elástica y flexible brindando respuesta e información mas ágil a
      los departamentos de la organización`,
      icon: <CloudIcon />,
      color: 'warning',
    },
    {
      headline: 'E-commerce',
      body: `Llevamos a cabo el desarrollo y personalización de tu plataforma
      de comercio electrónico digital, asegurando en todo momento la seguridad
      y fiabilidad del sistema`,
      icon: <ShoppingCartIcon />,
      color: 'success'
    }
  ]
  return (
    <Container component="section">
      <Box marginTop={8} marginBottom={5}>
        <Title variant="h3" align="center">
          Adopta la{' '}
          <TextColor color="secondary">Transformación Digital</TextColor>
        </Title>
      </Box>
      <Grid container spacing={3} justify="center">
        {services.map((service, index) => (
          <Grid item lg={4}>
            <ServiceCard key={index} {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default DigitalTransformation
