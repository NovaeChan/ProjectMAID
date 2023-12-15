import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import './style/main.css'


function App() {
  return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
  )
}

export default App