import { withTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const Feature = ({ text, iconColor, textColor }) => (
  <Box display="flex">
    <Box marginTop={0.3} marginRight={1} color={iconColor}>
      <CheckCircleIcon fontSize="small" />
    </Box>
    <Box color={textColor}>
      <Typography>{text}</Typography>
    </Box>
  </Box>
)

export default withTheme(Feature)
