import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/contact'
import Footer from '../components/Footer'
import About from '../components/About'

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'><About/></div>
    <Footer/>
    </>
  )
}

export default AboutPage