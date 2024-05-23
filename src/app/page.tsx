'use client'
import React from 'react';
import Lista from '../components/PeliculasList';

const HomePage = () => {
  return (
    <>
    <h1 className="text-white text-center font-semibold text-xl mr-4">PELICULAS</h1>
      <Lista/>
    </>
  );
}

export default HomePage;