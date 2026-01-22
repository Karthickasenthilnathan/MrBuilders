import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactFormModal from "./components/ContactFormModal"
import JoinUsModal from "./components/JoinUsModal"
import ScrollToTop from "./components/ScrollToTop"


import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)

  return (
    <>
      <Navbar
        setFormOpen={setFormOpen}
        setJoinOpen={setJoinOpen}
      />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home setFormOpen={setFormOpen} />}
        />

        <Route
          path="/about"
          element={<About setFormOpen={setFormOpen} />}
        />

        <Route
          path="/services"
          element={<Services setFormOpen={setFormOpen} />}
        />
        <Route path="/projects" element={<Projects />} />

      </Routes>

  
      <JoinUsModal open={joinOpen} setOpen={setJoinOpen} />
      <ContactFormModal open={formOpen} setOpen={setFormOpen} />

      <Footer
  setJoinOpen={setJoinOpen}
  setFormOpen={setFormOpen}
/>


    </>
  )
}

export default App
