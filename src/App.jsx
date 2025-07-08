import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import ContactPage from "./pages/contact/ContactPage"
import AboutPage from "./pages/about/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<AboutPage />}/>   
        <Route path="/contact"element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App