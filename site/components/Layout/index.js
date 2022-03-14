import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children, categories , brands}) => {
  return (
    <div className='flex flex-col justify-between  min-h-screen bg-gray-50'>
      <Header categories={categories} brands = {brands} />
      <div className='container px-5 py-8 mx-auto '>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
