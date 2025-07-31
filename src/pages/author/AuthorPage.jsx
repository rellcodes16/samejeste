import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Socials from "../home/Socials"
import AboutAuthor from "./AboutAuthor"
import AuthorWorks from "./AuthorWorks"

function AuthorPage() {
  return (
    <div className="font-montserrat">
        <Header />
        <AboutAuthor />
        <AuthorWorks />
        <Socials />
        <Footer />
    </div>
  )
}

export default AuthorPage