import { useGetEvents } from "../../hooks/useGetEvents"
import { useGetQuotes } from "../../hooks/useGetQuotes"
import { useGetThreeRecentBlogs } from "../../hooks/useGetThreeRecentBlogs"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LoadingScreen from "../../UI/Loading"
import Blog from "./Blog"
import Hero from "./Hero"
import NewsAndEvents from "./NewsAndEvents"
import Socials from "./Socials"


function Home() {
    const { isLoading: isLoadingEvents, error } = useGetEvents();
    const { isLoading: isLoadingRecentBlog } = useGetThreeRecentBlogs()
    const { isLoading: isLoadingQuotes } = useGetQuotes()
  
    if (isLoadingEvents || isLoadingRecentBlog || isLoadingQuotes) {
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