'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createPelicula, updatePelicula } from '@/lib/data';

function FormPut(params) {
    //const router = useRouter();
    const [formData, setFormData] = useState({
        id: 0,
        titulo: '',
        descripcion: '',
        duracion: '',
        categoriaId: 0
    });
    const [categoriaNombre, setCategoriaNombre] = useState('');

    // Initialize formData with params values
    useEffect(() => {
        setFormData({
            id: params.id !== undefined ? params.id : 0,
            titulo: params.titulo || '',
            descripcion: params.descripcion || '',
            duracion: params.duracion || '',
            categoriaId: params.categoriaId !== undefined ? params.categoriaId : 0
        });
    }, [params]);

    useEffect(() => {
        const categoria = params.categorias.find(cat => cat.id === formData.categoriaId);
        if (categoria) {
            setCategoriaNombre(categoria.nombre);
        }
    }, [formData.categoriaId, params.categorias]);

    const nullValues = () => {
        setFormData({
            id: 0,
            titulo: '',
            descripcion: '',
            duracion: '',
            categoriaId: 0
        });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(formData.categoriaId);
        setFormData({
            ...formData,
            [e.target.name]: (e.target.name === 'duracion' || e.target.name === 'categoriaId' ? parseInt(value, 10) : value),
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await updatePelicula(params.id, formData);
    //     nullValues();
    //     params.onChildUpdate();
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.id) {
            await updatePelicula(formData.id, { titulo: formData.titulo,  descripcion: formData.descripcion, duracion: formData.duracion, categoriaId: formData.categoriaId});
        } else {
            await createPelicula({ titulo: formData.titulo,  descripcion: formData.descripcion, duracion: formData.duracion, categoriaId: formData.categoriaId});
        }
        nullValues();
        params.onChildUpdate();
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input type="hidden" id="id" name="id" value={params.id} />
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                    Título
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="titulo"
                    name="titulo"
                    type="text"
                    onChange={handleChange}
                    value={formData.titulo}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                    Descripción
                </label>
                <textarea
                    rows="8"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="descripcion"
                    name="descripcion"
                    onChange={handleChange}
                    value={formData.descripcion}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duracion">
                    Duración
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="duracion"
                    name="duracion"
                    type="number"
                    onChange={handleChange}
                    value={formData.duracion}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoriaId">
                    Categoria
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="categoriaId"
                    name="categoriaId"
                    onChange={handleChange}
                    value={formData.categoriaId}
                >
                    {params.categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex items-center justify-center">
            <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {formData.id ? 'Actualizar Pelicula' : 'Crear Pelicula'}
                </button>
            </div>
        </form>
    );
}

export default FormPut;
