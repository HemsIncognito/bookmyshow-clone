import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Slider from "react-slick";

//Layouts
import MovieLayout from '../layouts/Movie.layout'

// //Components
// import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
// import MovieHero from "../components/MovieHero/MovieHero.Component";
// import Cast from "../components/Cast/Cast.Component";

const MoviePage = () => {

  const{ id } = useParams();

  // const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b0380404025ff71ff7222783b12710df`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=b0380404025ff71ff7222783b12710df`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    reqSimilarMovies();
  }, [id]);

  useEffect(() => {
    const reqRecommededMovies = async () => {
      const getRecommendations = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b0380404025ff71ff7222783b12710df`);
      setRecommendations(getRecommendations.data.results);
    };
    reqRecommededMovies();
  }, [id]);

  // useEffect(() => {
  //   const reqMovie = async () => {
  //     const getMovieDate = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b0380404025ff71ff7222783b12710df`);
  //     setMovie(getMovieDate.data);
  //   };
  //   requestMovie();
  // }, [id]);

  return (
    <div>MoviePage</div>
  )
}

export default MovieLayout(MoviePage)
