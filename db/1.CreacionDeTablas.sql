-- Base de datos del refugio de animales
CREATE DATABASE refugiodb;

\connect refugiodb

-- Creación de tablas sin restricciones.
CREATE TABLE "Administrador" (
    "Identificador" INTEGER,
    "Usuario" TEXT,
    "Contrasena" TEXT
);

CREATE TABLE "Animal" (
    "Identificador" INTEGER,
    "Nombre" TEXT,
    "Raza" TEXT,
    "Edad" INTEGER,
    "Sexo" TEXT,
    "FechaIngreso" DATE,
    "TipoAnimal" TEXT
);
