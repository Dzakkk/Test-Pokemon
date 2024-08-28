import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import Pokedex from './pages/Pokedex';
import Navbar from './components/Navbar';
import PokeBag from './pages/pokeBag';

function App() {
  return (
    <Router>
      <PokemonProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/bag" element={<PokeBag />} />
        </Routes>
      </PokemonProvider>
    </Router>
  );
}

export default App;
