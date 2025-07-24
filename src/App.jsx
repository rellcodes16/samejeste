import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ContactPage from "./pages/contact/ContactPage"
import AboutPage from "./pages/about/AboutPage"
import NewsAndEvents from "./pages/newsandevents/NewsAndEvents"
import BlogPost from "./pages/blog/BlogPost"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<AboutPage />}/>   
        <Route path="/contact"element={<ContactPage />}/>
        <Route path="/newsandevents"element={<NewsAndEvents />}/>
        <Route path="/blogs"element={<BlogPost />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App