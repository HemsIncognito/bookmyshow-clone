import React from 'react'
import { Link } from 'react-router-dom'

const Poster = (props) => {
  return (
    <Link to={`/movies/${props.id}`}>
        <div className='flex flex-col items-start gap-2 px-1 md:px-3'>
            <div className='h-40 md:h-80'>
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="thumbnail" className='w-full h-full rounded-md'/>
            </div>
        <h3 className={`text-lg font-medium ${props.isDark ? 'text-white' : 'text-grey-700'}`}> {props.title} </h3>
        </div>


    </Link>
  )
}

export default Poster
