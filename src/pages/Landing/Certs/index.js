import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import Image from '../../../components/Image'
import cloudPractitioner from '../../../assets/img/cert/aws_cloud_practitioner.png'
import developerAssociate from '../../../assets/img/cert/aws_developer_associate.png'
import solArchAssociate from '../../../assets/img/cert/aws_solutions_architect_associate.png'
import solArchProfessional from '../../../assets/img/cert/aws_solutions_architect_professional.png'
import sysOpsAdmin from '../../../assets/img/cert/aws_sysops_administrator_associate.png'

const Certs = () => {
  const WIDTH = 125,
    HEIGHT = 125

  return (
    <Card elevation={0}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          paddingY={12}
        >
          <Typography variant="h5" align="center">
            Nuestras certificaciones
          </Typography>
          <Box align="center" marginTop={6}>
            <Box>
              <Image src={solArchProfessional} width={WIDTH} height={HEIGHT} />
              <Image src={developerAssociate} width={WIDTH} height={HEIGHT} />
              <Image src={solArchAssociate} width={WIDTH} height={HEIGHT} />
            </Box>
            <Box>
              <Image src={sysOpsAdmin} width={WIDTH} height={HEIGHT} />
              <Image src={cloudPractitioner} width={WIDTH} height={HEIGHT} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Certs
