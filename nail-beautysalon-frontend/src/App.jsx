import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'

function App() {
  
  return (
      <BrowserRouter>

            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            </Routes>

            <Footer />

        </BrowserRouter>
  )
}

export default App
