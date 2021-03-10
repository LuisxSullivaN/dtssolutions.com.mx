import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4d74a0',
      main: '#1a4971',
      dark: '#002245',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#73e0d4',
      main: '#3caea3',
      dark: '#007e74',
      contrastText: '#ffffff',
    },
    neutral: {
      main: '#8895a7'
    }
  },
});

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}
  </ThemeProvider>
)

export default AppThemeProvider
