import Hero from "../components/Hero"
import Achievements from "../components/Achievements"
import ServicesIntro from "../components/ServicesIntro"
import ServicesGrid from "../components/ServicesGrid"

const Home = ({ setFormOpen }) => {
  return (
    <>
      <Hero setFormOpen={setFormOpen} />
      <Achievements setFormOpen={setFormOpen} />
      <ServicesIntro />
      <ServicesGrid setFormOpen={setFormOpen} />
    </>
  )
}

export default Home
