import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/pages/Plans/Plans'
import Courses from '../components/pages/Courses/Courses'
import AboutUs from '../components/pages/AboutUs/AboutUs'
import ContactUs from '../components/pages/ContactUs/ContactUs'
import Support from '../components/pages/Support/Support'
import BecomeMember from '../components/pages/BecomeMember/BecomeMember'

function LayoutRoutes() {
  return (
   <Router>
    <Header/>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Educational-Website' element={<Home/>}></Route>
        <Route path='/services' element={<Plans/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/member' element={<BecomeMember/>}></Route>

    </Routes>

    <Footer/>
   </Router>
  )
}

export default LayoutRoutes
