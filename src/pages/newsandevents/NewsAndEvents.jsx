import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Socials from "../home/Socials"
import Featured from "./Featured"
import Upcoming from "./upcoming"

function NewsAndEvents() {
  return (
    <div>
        <Header />
        <Featured />
        <Upcoming />
        <Socials/>
        <Footer/>
    </div>
  )
}

export default NewsAndEvents