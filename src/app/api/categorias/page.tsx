'use client'
import React from 'react';
import CategoriesList from '@/components/CategoriesList';

const CategoriesPage = () => {
  return (
    <>
    <h1 className="text-white text-center font-semibold text-xl mr-4">CATEGORIAS</h1>
      <CategoriesList />
    </>
  );
}

export default CategoriesPage;