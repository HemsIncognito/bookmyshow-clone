import React, { useState } from "react";

//Layouts
import deafultLayout from "../layouts/deafult.layout";

//Components
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../components/Carousel/HeroCarousel.Component";

const HomePage = () => {
  const [picks, setPicks] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [streams, setStreams] = useState([]);
  return (
    <>
      <HeroCarousel/>
    </>
  )
}

export default deafultLayout(HomePage)