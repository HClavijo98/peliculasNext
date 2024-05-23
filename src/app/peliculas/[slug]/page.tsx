'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState} from 'react';
import { getPelicula } from '@/lib/data';

export default function Meals({ params }) {
    const [pelicula, setPelicula] = useState([]);

    // const mainPelicula = async (e) => {
    //     e.preventDefault();

    //     setPelicula = await getPelicula(params.slug);
    // };
    useEffect(() => {
        async function get() {
            setPelicula(await getPelicula(params.slug));
        }
        get()
      }, []);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="font-mono font-bold text-7xl text-center">{params.slug}</h1>
        <p className="font-mono font-bold text-7xl text-center">{pelicula.titulo}</p>
      </main>
    );
  }