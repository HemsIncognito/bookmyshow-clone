import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar.component'

const deafultLayout = (Component) => ({...props}) => {
  return (
    <div> 
        <Navbar />
        <Component {...props} />
    </div>
  )
}

export default deafultLayout
