'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { deletePelicula } from '@/lib/data';

const ButtonDelete = (params) => {

    return (
        <>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-5" onClick={params.onHandleDelete}>Eliminar</button>
        </>
    )
}

export default ButtonDelete;