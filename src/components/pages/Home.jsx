import Header from "../layout/Header"
import Hero from "../layout/Hero"
import InfoVideo from "../layout/InfoVideo"
import Slider from "../layout/Slider"
import Timeline from "../layout/Timeline"
import Wheel from "../layout/Wheel"

function Home() {
  return (
    <div className="page home">
      <Header />
      <Hero />
      <InfoVideo />

      <section className="tagline">
        <h4 className="tagline__preheading">Code-Free Brilliance</h4>
        <h3 className="tagline__heading">AI Testing at Its Best</h3>
      </section>

      <Wheel />
      <Slider />
      <Timeline />

    </div>
  )
}

export default Home
