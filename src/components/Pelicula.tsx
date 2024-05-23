'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonDelete from './ButtonDelete';
import ButtonUpdate from './ButtonUpdate';
import { deletePelicula } from '@/lib/data';

const Pelicula = (params) => {
    const router = useRouter();
    const sanitizeTitle = (title) => title.replace(/\s+/g, '-').toLowerCase();
    const imageUrl = `img/${sanitizeTitle(params.titulo)}.jpg`;

    let descripcion = params.descripcion;
    if (!params.preview && descripcion.length > 100) {
        descripcion = params.descripcion.substring(0, 100) + '...';
    }

    const handleDelete = async (e) => {
        await deletePelicula(params.id);
        params.onChildUpdate();
    };

    const update = (e) => {
        params.onHandleUpdate(params.id, params.titulo, params.descripcion, params.duracion, params.categoria);
    }

    const categoria = params.categorias.find(categoria => categoria.id === params.categoriaId);

    return (
        <div className="shadow-md rounded-lg p-6 mb-4 border-2 border-white w-[300px]">
            <img src={imageUrl} alt={params.titulo} className="mb-4 w-full rounded" style={{ height: '300px' }} />
            <h3 className="text-xl font-semibold mb-2">{params.titulo}</h3>
            <p>Descripción: {descripcion}</p>
            <p>Duración: {params.duracion} min</p>
            {categoria && <p>Categoría: {categoria.nombre}</p>}
            <ButtonUpdate onHandleUpdate={update} />
            <ButtonDelete onHandleDelete={handleDelete} />
        </div>
    );
}

export default Pelicula;
