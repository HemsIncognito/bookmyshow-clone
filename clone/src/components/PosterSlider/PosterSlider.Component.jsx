import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.component';

const PosterSlider = (props) => {
  const { posters, isDark, title, subtitle  } = props;

  const settings = {
    slidesToShow: 5,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return <>
      <div className='flex flex-col items-start sm:ml-3 my-2'>
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black' }`}> {title} </h3>
        <p className={`text-md ${isDark ? 'text-white' : 'text-black' }`}> {subtitle} </p>
      </div>
      <Slider {...settings}>
        {
          posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))
        }
      </Slider>
    </>
}

export default PosterSlider;