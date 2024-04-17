import React, { useState } from 'react'
import Slider from 'react-slick'
import { Next, Prev } from './Arrows.Component'

function HeroCarousel() {

  const [images] = useState([
    	{
        "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
      "id": 157336,
      "original_title": "Interstellar",
      "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Interstellar",
      "original_language": "en",
      "genre_ids": [12, 18, 878],
      "popularity": 234.714,
      "release_date": "2014-11-05",
      "video": false,
      "vote_average": 8.433,
      "vote_count": 34100
      },
      
      {
        backdrop_path: "/en971MEXui9diirXlogOrPKmsEn.jpg",
        id: 293660,
        original_title: "Deadpool",
        overview: "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        poster_path: "/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
        media_type: "movie",
        adult: false,
        title: "Deadpool",
        genre_ids: [28, 12, 35],
        original_language: "en",
        popularity: 185.984 ,
        release_date: "2016-02-09",
        video: false,
        vote_average: 7.612,
        vote_count: 29747
      },
      {
        "backdrop_path": "/aXPCXYFzFzdveVVk1HjVf9fHUcn.jpg",
      "id": 1103,
      "original_title": "Escape from New York",
      "overview": "In a world ravaged by crime, the entire island of Manhattan has been converted into a walled prison where brutal prisoners roam. After the US president crash-lands inside, war hero Snake Plissken has 24 hours to bring him back.",
      "poster_path": "/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Escape from New York",
      "original_language": "en",
      "genre_ids": [878, 28],
      "popularity": 27.845,
      "release_date": "1981-05-23",
      "video": false,
      "vote_average": 7.068,
      "vote_count": 2953
      },
      {
        adult: false,
        backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
        genre_ids: [53],
        id: 985939,
        original_language: "en",
        original_title: "Fall",
        overview: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
        popularity: 6731.327,
        poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
        release_date: "2022-08-11",
        title: "Fall",
        video: false,
        vote_average: 7.4,
        vote_count: 346,
      },
      {
        "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
      "id": 140607,
      "original_title": "Star Wars: The Force Awakens",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Star Wars: The Force Awakens",
      "original_language": "en",
      "genre_ids": [12, 28, 878],
      "popularity": 78.126,
      "release_date": "2015-12-15",
      "video": false,
      "vote_average": 7.284,
      "vote_count": 18843
      }
]);
  
const settingsLG = {
    centerMode: true,
    centerPadding: "80px",
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const settings = {	
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />,
    pauseOnHover: true,
  };

  return <>
        {/* Hidden for large */}
        <div className="lg: hidden">
            <Slider {...settings}>
                {
									images.map((image, index) => (
										<div className='w-full h-56 md:h-80 py-3' key={index}>
												<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
												alt='Hero Banner' className='w-full h-full rounded-md object-cover'/>
										</div>
                  ))
                }
            </Slider>
        </div>
        {/* Hidden for all screens except large*/}
        <div className="hidden lg:block">
        <Slider {...settingsLG}>
                { images.map((image, index) => (
										<div className='w-full h-96 px-2 py-3' key={index}>
												<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
												alt='Hero Banner' className='w-full h-full rounded-md object-cover'/>
										</div>
                  ))
                }
            </Slider>
        </div>
    </>
}


export default HeroCarousel
