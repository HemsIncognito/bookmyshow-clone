import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.component'

const MovieLayout = (Component) => ({...props}) => { 
  return (
    <div> 
        <MovieNavbar/>
        <Component {...props} />
    </div>
  )
}

export default MovieLayout