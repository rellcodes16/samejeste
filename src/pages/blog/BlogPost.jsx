import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Socials from "../home/Socials"
import BlogList from "./BlogList"
import Featured from "./Featured"

function BlogPost() {
  return (
    <div>
        <Header />
        <Featured />
        <BlogList />
        <Socials />
        <Footer />
    </div>
  )
}

export default BlogPost