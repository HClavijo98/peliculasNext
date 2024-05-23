'use client'
import React from 'react';
import { getPeliculas } from '@/lib/data'
import { getCategorias } from '@/lib/data'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Pelicula from './Pelicula';
import FormPelicula from './formPelicula';
import ButtonCreate from './ButtonCreate';

const Lista = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [id, setId] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [duracion, setDuracion] = useState(0);
    const [categoriaId, setCategoriaId] = useState(0);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const create = (e) => {
        nullValues();
        openModal();
    };

    const nullValues = () => {
        setId(0);
        setTitulo('');
        setDescripcion('');
        setDuracion(0);
        setCategoriaId(0);
    };

    const handleChildUpdate = () => {
        setShouldUpdate(true);
        closeModal();
    };

    const handleUpdate = (id, titulo, descripcion, duracion, categoriaId) => {
        setId(id);
        setTitulo(titulo);
        setDescripcion(descripcion);
        setDuracion(duracion);
        setCategoriaId(categoriaId);
        openModal();
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
                setPeliculas(await getPeliculas());
            }
            updt()
            setShouldUpdate(false);
        }
    }, [shouldUpdate]);

    useEffect(() => {
        async function get() {
            setPeliculas(await getPeliculas());
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
                <FormPelicula id={id} titulo={titulo} descripcion={descripcion} duracion={duracion} categoriaId={categoriaId} categorias={categorias} onChildUpdate={handleChildUpdate} />
            </Modal>
            <ButtonCreate onHandleCreate={create} />
            <div className="flex flex-wrap">
                {peliculas.map((pelicula) => (
                    <Pelicula key={pelicula.id} id={pelicula.id} titulo={pelicula.titulo} descripcion={pelicula.descripcion} duracion={pelicula.duracion} categoriaId={pelicula.categoriaId} onChildUpdate={handleChildUpdate} onHandleUpdate={handleUpdate} categorias={categorias} />
                ))}
            </div>
        </>
    )
}

export default Lista;