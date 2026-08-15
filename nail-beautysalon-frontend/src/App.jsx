import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  
  return (
      <BrowserRouter>

            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />

        </BrowserRouter>
  )
}

export default App
