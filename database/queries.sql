DROP TABLE IF EXISTS BOOKS;

CREATE TABLE BOOKS (
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR NOT NULL,
	PRICE INT CHECK(PRICE >= 0) DEFAULT 0,
	AUTHOR VARCHAR NOT NULL
);

-- SEEDERS - SEMILLAS
INSERT INTO BOOKS (NAME, PRICE, AUTHOR) VALUES
    ('Cien años de soledad', 20, 'Gabriel García Márquez'),
    ('Don Quijote de la Mancha', 15, 'Miguel de Cervantes'),
    ('Rayuela', 18, 'Julio Cortázar'),
    ('Crónica de una muerte anunciada', 12, 'Gabriel García Márquez'),
    ('La casa de los espíritus', 22, 'Isabel Allende'),
    ('Pedro Páramo', 14, 'Juan Rulfo'),
    ('Ficciones', 16, 'Jorge Luis Borges'),
    ('Los detectives salvajes', 20, 'Roberto Bolaño'),
    ('La sombra del viento', 19, 'Carlos Ruiz Zafón'),
    ('El amor en los tiempos del cólera', 17, 'Gabriel García Márquez'),
    ('1984', 13, 'George Orwell'),
    ('El Aleph', 15, 'Jorge Luis Borges'),
    ('La tregua', 11, 'Mario Benedetti'),
    ('El túnel', 14, 'Ernesto Sabato'),
    ('Los siete locos', 18, 'Roberto Arlt'),
    ('La ciudad y los perros', 21, 'Mario Vargas Llosa'),
    ('Aura', 16, 'Carlos Fuentes'),
    ('La fiesta ajena', 19, 'Liliana Heker'),
    ('Los cachorros', 12, 'Mario Vargas Llosa'),
    ('El coronel no tiene quien le escriba', 20, 'Gabriel García Márquez');