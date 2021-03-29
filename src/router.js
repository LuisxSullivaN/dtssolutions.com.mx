import { Switch, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './pages/Landing'
import SolutionsPage from './pages/Solutions'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'

const AppRouter = () => (
  <Router>
    <Switch>
      <LandingPage exact path="/" />
      <SolutionsPage path="/soluciones" />
      <AboutPage path="/nosotros" />
      <ContactPage path="/contacto" />
      <BlogPage path="/blog" />
    </Switch>
  </Router>
)

export default AppRouter
