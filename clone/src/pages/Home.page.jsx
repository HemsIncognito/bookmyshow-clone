import React, { useEffect, useState } from "react";
import axios from 'axios';

//Layouts
import deafultLayout from "../layouts/deafult.layout";

//Components
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import HeroCarousel from "../components/Carousel/HeroCarousel.Component";

const HomePage = () => {
  const [picks, setPicks] = useState([]);
  const [newReleases, setReleases] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const TopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=57a338ab77be4243276b97baa614ddad');
      setPicks(getTopRatedMovies.data.results);
    }
    TopRatedMovies();
  }, [])

  useEffect(() => {
    const UpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("https://api.themoviedb.org/3/movie/now_playing api_key=57a338ab77be4243276b97baa614ddad");
      setReleases(getUpcomingMovies.data.results);
    }
    UpcomingMovies();
  }, [])

  useEffect(() => {
    const OnlineStreams = async () => {
      const getStreams = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=57a338ab77be4243276b97baa614ddad");
      setStreams(getStreams.data.results);
    };
    OnlineStreams();
  }, []);



  return (
    <>
      <HeroCarousel/>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">Best of Entertainment</h1>
        <EntertainmentCard/>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
          title = "Recommended Movies"
          subtitle = "Top Picks for you"
          posters= {picks}
          isDark = {false}
        />
      </div>

      <div className ='bg-premier py-12 h-26'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay"  className='w-full h-full'/>
          </div>
          <PosterSlider 
            title = "Premiers"
            subtitle = "Find Brand New Releases here"
            posters= {newReleases}
            isDark = {true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <PosterSlider 
          title = "Online Streaming Movies"
          subtitletitle = "Now Available on Online Streams"
          posters= {streams}
          isDark = {false}
        />
      </div>
    </>
  )
}

export default deafultLayout(HomePage);