import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import '@fontsource/source-sans-pro'
import '@fontsource/poppins'
import '@fontsource/open-sans'
import '@fontsource/spartan'
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4d74a0',
      main: '#1a4971',
      dark: '#002245',
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#73e0d4',
      main: '#3caea3',
      dark: '#007e74',
      contrastText: '#fafafa'
    }
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", "sans-serif"'
  }
})

theme = responsiveFontSizes(theme)

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default AppThemeProvider
