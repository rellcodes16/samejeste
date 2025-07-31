import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ContactPage from "./pages/contact/ContactPage"
import AboutPage from "./pages/about/AboutPage"
import NewsAndEvents from "./pages/newsandevents/NewsAndEvents"
import BlogPost from "./pages/blog/BlogPost"
import BlogPage from "./pages/blog/BlogPage"
import AuthorPage from "./pages/author/AuthorPage"
import MagazinePage from "./pages/magazine/MagazinePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<AboutPage />}/>   
        <Route path="/contact"element={<ContactPage />}/>
        <Route path="/newsandevents"element={<NewsAndEvents />}/>
        <Route path="/blogs"element={<BlogPost />}/>
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/author/:authorId" element={<AuthorPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App