import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'><Course/></div>
    <Footer/>
    </>
  )
}

export default Courses