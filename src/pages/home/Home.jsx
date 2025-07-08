import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Blog from "./Blog"
import Hero from "./Hero"
import NewsAndEvents from "./NewsAndEvents"
import Socials from "./Socials"


function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <NewsAndEvents/>
      <Blog />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home