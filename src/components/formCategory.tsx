'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createCategoria, updateCategoria } from '@/lib/data';

function FormCategory({ id, nombre, onChildUpdate }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        id: 0,
        nombre: ''
    });

    useEffect(() => {
        if (id) {
            setFormData({
                id,
                nombre
            });
        }
    }, [id, nombre]);

    const nullValues = () => {
        setFormData({
            id: 0,
            nombre: ''
        });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.id) {
            await updateCategoria(formData.id, { nombre: formData.nombre });
        } else {
            await createCategoria({ nombre: formData.nombre });
        }
        nullValues();
        onChildUpdate();
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input
                type="hidden"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={handleChange}
                    placeholder="Nombre de la categoría"
                    value={formData.nombre}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {formData.id ? 'Actualizar Categoria' : 'Crear Categoria'}
                </button>
            </div>
        </form>
    );
}

export default FormCategory;
