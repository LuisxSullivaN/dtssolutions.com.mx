import { BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './pages/Landing'

const AppRouter = () => (
  <Router>
    <LandingPage path="/"/>
  </Router>
)

export default AppRouter
