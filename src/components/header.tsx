import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";

function Header() {
    return (
        <header className="bg-gray-800 py-4">
            <nav className="flex items-center justify-between max-w-4xl mx-auto px-4">
                <div className="flex items-center">
                    <IoHome /><a href="/" className="text-white font-semibold text-lg mr-4"> Inicio</a>
                    <FaPlusSquare /><a href="/api/categorias" className="text-white hover:text-gray-300">Categorias</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;