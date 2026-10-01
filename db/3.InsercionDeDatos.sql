\connect refugiodb

-- Administrador con contraseña almacenada como hash bcrypt de 8 rondas.
INSERT INTO "Administrador" ("Identificador", "Usuario", "Contrasena")
VALUES (1, 'chacaeadm', '$2b$08$4p1WmntQbUKaAML/MOVQL.6IqOsWx/44DJoA/ARRL4nqhmrwDkIfy');

-- Cinco gatos. FechaIngreso se asigna automáticamente mediante DEFAULT.
INSERT INTO "Animal"
    ("Identificador", "Nombre", "Raza", "Edad", "Sexo", "TipoAnimal")
VALUES
    (1, 'Michi',   'Europeo',       2, 'Hembra', 'Gato'),
    (2, 'Simba',   'Persa',         4, 'Macho',  'Gato'),
    (3, 'Luna',    'Siamés',        1, 'Hembra', 'Gato'),
    (4, 'Tom',     'Bengalí',       3, 'Macho',  'Gato'),
    (5, 'Nala',    'Angora',        5, 'Hembra', 'Gato');

-- Cinco perros. FechaIngreso se asigna automáticamente mediante DEFAULT.
INSERT INTO "Animal"
    ("Identificador", "Nombre", "Raza", "Edad", "Sexo", "TipoAnimal")
VALUES
    (6,  'Max',      'Labrador',       3, 'Macho',  'Perro'),
    (7,  'Bella',    'Golden Retriever', 2, 'Hembra', 'Perro'),
    (8,  'Rocky',    'Pastor Alemán',   4, 'Macho',  'Perro'),
    (9,  'Coco',     'Poodle',          1, 'Hembra', 'Perro'),
    (10, 'Toby',     'Beagle',          6, 'Macho',  'Perro');
