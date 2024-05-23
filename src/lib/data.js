"use server"
import Prisma from './prisma';
//PELICULAS
export async function getPeliculas(req, res) {
	const peliculas = await Prisma.pelicula.findMany();
	return peliculas; 
}

// export async function getPelicula(id) {
//     const data = await Prisma.pelicula.findUnique({
//       where: {
//         id: id,
//       },
//     });
//     return data;
//   }

export async function createPelicula(data) {
    const { titulo, descripcion, duracion, categoriaId} = data;
  
    const pelicula = await Prisma.pelicula.create({
      data: data,
    });
    return pelicula;
  }

// PUT: Actualiza una película existente por su ID
export async function updatePelicula(id, data) {
    const pelicula = await Prisma.pelicula.update({
      where: {
        id: id,
      },
      data: data,
    });
    return pelicula;
  }

// DELETE: Elimina una película existente por su ID
export async function deletePelicula(id) {
    const pelicula = await Prisma.pelicula.delete({
      where: {
        id: id,
      },
    });
    return pelicula;
  }
//CATEGORIAS
  export async function getCategorias(req, res) {
    const categorias = await Prisma.categoria.findMany();
    return categorias; 
  }
  
  export async function getCategoria(id) {
      const data = await Prisma.categoria.findUnique({
        where: {
          id: id,
        },
      });
      return data;
    }
  
    export async function createCategoria(data) {
      const { nombre } = data;
  
      const categoria = await Prisma.categoria.create({
          data: {
              nombre: nombre
          },
      });
      return categoria;
  }
  
  // PUT: Actualiza una película existente por su ID
  export async function updateCategoria(id, data) {
      const categoria = await Prisma.categoria.update({
        where: {
          id: id,
        },
        data: data,
      });
      return categoria;
    }
  
  // DELETE: Elimina una película existente por su ID
  export async function deleteCategoria(id) {
      const categoria = await Prisma.categoria.delete({
        where: {
          id: id,
        },
      });
      return categoria;
    }