import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import { MovieContext } from '../context/Movie.context';

//Layouts
import MovieLayout from '../layouts/Movie.layout'

//Components
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from '../components/Cast/Cast.component';


const MoviePage = () => {

  const{ id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  //Hooks
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  //Mangaing the Effects
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=57a338ab77be4243276b97baa614ddad`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=57a338ab77be4243276b97baa614ddad`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    reqSimilarMovies();
  }, [id]);

  useEffect(() => {
    const reqRecommededMovies = async () => {
      const getRecommendations = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=57a338ab77be4243276b97baa614ddad`);
      setRecommendations(getRecommendations.data.results);
    };
    reqRecommededMovies();
  }, [id]);

  useEffect(() => {
    const reqdescription = async () => {
      const getMovieDate = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=57a338ab77be4243276b97baa614ddad`);
      setMovie(getMovieDate.data);
    };
    reqdescription();
  }, [id]);

  //Config Settings 
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initailSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initailSlide: 2
        }
      }
    ]
  };

  const castSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initailSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initailSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initailSlide: 2,
        }
      }
    ]
  };

  return (
    <>
      <MovieHero/>
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">

        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl"> About the movie </h1>
          <p>{movie.overview}</p>
        </div>

        <div className='my-6'> <hr /> </div>
       

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3"> Applicable Offers </h2>

          <div className="flex gap-3 lg:flex-row ">
            {/* Yellow Box - 1 */}
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold"> Visa Stream Offer </h3>
                <p className="text-gray-600"> Get upto INR 200 on all RuPay Card* on BookMyShow Stream </p>
              </div>
            </div>

            {/* Yellow Box - 2 */}
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold"> Film Pass </h3>
                <p className="text-gray-600"> Get upto 25% off on all RuPay Card* on BookMyShow Stream </p>
              </div>
            </div>

          </div>
        </div>

        <div className='my-6'> <hr /> </div>

        {/* Cast Section */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4"> Cast and Crew </h2>
          <Slider {...castSettings}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>
          
        <div className='my-6'> <hr /> </div>
          
        {/* Recommended Movies Section */}
        <div className='my-8'>
          <PosterSlider 
            config = {settings}
            title = "Recommended Movies"
            posters= {recommendations}
            isDark = {false}
          />
        </div>

        <div className='my-6'> <hr /> </div>

        {/* BMS XCLUSIV Section */}
        <div className='my-8'>
          <PosterSlider 
              config = {settings}
              title = "Exclusive"
              posters= {similarMovies}
              isDark = {false}
            />
        </div>

      </div>
    </>
  )
}

export default MovieLayout(MoviePage)
