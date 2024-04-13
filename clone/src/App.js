import './App.css';

//React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Routes, Route} from 'react-router-dom';

//Pages
import Homepage from './pages/Home.page';
import Moviepage from './pages/Movie.page';
import Playpage from './pages/Play.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/movies/:id' element={<Moviepage />}/>
      <Route path='/plays' element={<Playpage />}/>
    </Routes>
  );
}

export default App;
