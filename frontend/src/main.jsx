import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './index.css'
import HomePage from './landingPage/home/HomePage'
import Signup from './landingPage/signup/Signup'
import AboutPage from './landingPage/about/AboutPage'
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from './landingPage/support/SupportPage'
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
import ProductPage from './landingPage/products/ProductPage'
import NotFound from './landingPage/NotFound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path='*' element={ <NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
