'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ButtonDelete from './ButtonDelete';
import ButtonUpdate from './ButtonUpdate';
import { deleteCategoria } from '@/lib/data';

const Category = (params) => {
    const router = useRouter();

    const handleDelete = async (e) => {
        await deleteCategoria(params.id);
        params.onChildUpdate();
    };

    const update = (e) => {
        params.onHandleUpdate(params.id, params.nombre);
    }

    return (
        <div className="shadow-md rounded-lg p-6 mb-4 border-2 border-white w-[300px]">
            <h3 className="text-xl font-semibold mb-2">{params.id}</h3>
            <h3 className="text-xl font-semibold mb-2">{params.nombre}</h3>
            <ButtonUpdate onHandleUpdate={update} />
            <ButtonDelete onHandleDelete={handleDelete} />
        </div>
    );
}

export default Category;