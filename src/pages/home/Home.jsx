import { useGetEvents } from "../../hooks/useGetEvents"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LoadingScreen from "../../UI/Loading"
import Blog from "./Blog"
import Hero from "./Hero"
import NewsAndEvents from "./NewsAndEvents"
import Socials from "./Socials"


function Home() {
    const {isLoading, error } = useGetEvents();
  
    if (isLoading) {
      return <LoadingScreen />;
    }
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