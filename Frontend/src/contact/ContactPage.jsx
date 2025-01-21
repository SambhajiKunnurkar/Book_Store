import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'><Contact/></div>
    <Footer/>
    </>
  )
}

export default ContactPage