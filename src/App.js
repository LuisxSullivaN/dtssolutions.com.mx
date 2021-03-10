import AppRouter from './router'
import AppThemeProvider from './theme'

const App = () => (
  <AppThemeProvider>
    <AppRouter/>
  </AppThemeProvider>
)

export default App;
