import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recruiters from './pages/Recruiters'
import Clients from './pages/Clients'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
