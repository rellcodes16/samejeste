import { useGetEvents } from "../../hooks/useGetEvents"
import { useGetNews } from "../../hooks/useGetNews"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LoadingScreen from "../../UI/Loading"
import Socials from "../home/Socials"
import Featured from "./Featured"
import News from "./News"
import Upcoming from "./Upcoming"

function NewsAndEvents() {
  const { isLoading:isLoadingEvents } = useGetEvents()
  const { isLoading:isLoadingNews } = useGetNews();
  if(isLoadingEvents || isLoadingNews) return <LoadingScreen />
  return (
    <div>
        <Header />
        <Featured />
        <News />
        <Upcoming />
        <Socials/>
        <Footer/>
    </div>
  )
}

export default NewsAndEvents