'use client'
import React from 'react';

const ButtonCreate = (params) => {

    return (
        <>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-5" onClick={params.onHandleCreate}>Crear</button>
        </>
    )
}

export default ButtonCreate;