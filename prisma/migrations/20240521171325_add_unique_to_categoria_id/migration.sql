/*
  Warnings:

  - A unique constraint covering the columns `[categoriaId]` on the table `Pelicula` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoriaId` to the `Pelicula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pelicula` ADD COLUMN `categoriaId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(200) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pelicula_categoriaId_key` ON `Pelicula`(`categoriaId`);

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
