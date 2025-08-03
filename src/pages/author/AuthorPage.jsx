import { useParams } from "react-router-dom"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import Socials from "../home/Socials"
import AboutAuthor from "./AboutAuthor"
import AuthorWorks from "./AuthorWorks"
import { useGetBlogsByAuthor } from "../../hooks/useGetAuthor"
import LoadingScreen from "../../UI/Loading"
import ErrorScreen from "../../UI/Error"

function AuthorPage() {
  const { authorId } = useParams();
  const { isLoading, error } = useGetBlogsByAuthor(authorId);

  if(isLoading) return <LoadingScreen/>
  if(error) return <ErrorScreen />
  
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