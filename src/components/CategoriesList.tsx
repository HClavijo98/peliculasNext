'use client'
import React from 'react';
import { getCategorias } from '@/lib/data'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Category from './Category';
import FormCategory from './formCategory';
import ButtonCreate from './ButtonCreate';

const CategoriesList = () => {
    const [categorias, setCategorias] = useState([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChildUpdate = () => {
        setShouldUpdate(true);
        closeModal();
    };

    const handleUpdate = (id, nombre) => {
        setId(id);
        setNombre(nombre);
        openModal();
    };
    const create = (e) => {
        nullValues();
        openModal();
    };

    const nullValues = () => {
        setId('');
        setNombre('')
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (shouldUpdate) {
            async function updt() {
                setCategorias(await getCategorias());
            }
            updt()
            setShouldUpdate(false);
        }
    }, [shouldUpdate]);

    useEffect(() => {
        async function get() {
            setCategorias(await getCategorias());
        }
        get()
    }, []);

    return (
        <>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{
                content: {
                    width: '500px',
                    margin: 'auto', // centra el modal horizontalmente
                }
            }} >
                <FormCategory id={id} nombre={nombre} onChildUpdate={handleChildUpdate} />
            </Modal>
            <ButtonCreate onHandleCreate={create} />
            <div className="flex flex-wrap">
                {categorias.map((category) => (
                    <Category key={category.id} id={category.id} nombre={category.nombre} onChildUpdate={handleChildUpdate} onHandleUpdate={handleUpdate} categorias={categorias} />
                ))}
            </div>
        </>
    )
}

export default CategoriesList;