import React from 'react'
import {Routes, Route} from 'react-router-dom'
//components
import Navbar from './Components/Navbar';
//pages
import About from './Pages/About';
import Error from './Pages/Error';
import Home from './Pages/Home';
import SingleCocktail from './Pages/SingleCocktail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="cocktail/:id" element = {<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
