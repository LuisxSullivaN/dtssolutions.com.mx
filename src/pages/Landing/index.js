import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Benefits from './Benefits'
import Partner from './Partner'
import DigitalTransformation from './DigitalTransformation'
import OurClients from './OurClients'
import Certs from './Certs'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Benefits />
        <Partner />
        <Certs />
        <DigitalTransformation />
        <OurClients />
      </main>
      <Footer />
    </>
  )
}
export default LandingPage
