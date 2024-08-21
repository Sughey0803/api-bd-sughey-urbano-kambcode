-- 1. Create database
CREATE DATABASE bootcamp_db;

-- 2. Crear la tabla students
CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR(150) UNIQUE NOT NULL
);

-- 3. Crear la tabla de cursos
CREATE TABLE cursos(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	description TEXT
);

-- 4. Crear la tabla de enrollments
CREATE TABLE enrollments(
	id SERIAL PRIMARY KEY,
	student_id INT REFERENCES students(id) ON DELETE CASCADE,
	course_id INT REFERENCES cursos(id) ON DELETE CASCADE,
	grade VARCHAR(5)
);

-- 5. Relaciones entre las tablas
/*
    **Relacion de uno a muchos**; 'students' y 'enrollments'
    - Un estudiante puede estar inscrito en varios cursos.
    - Un curso puede tener varios estudiantes inscritos.

    **Relacion muchos a muchos**; 'students' y 'cursos' a través de la tabla 'enrollments'
    - Esto se logra con las llaves foráneas 'student_id' y 'course_id' en la tabla 'enrollments'
*/

-- 6. Verificar la Estructura
SELECT * FROM students;
SELECT * FROM cursos;
SELECT * FROM enrollments;

-- 7. Inserción de datos
-- 7.1 Inserción de tabla de estudiantes
INSERT INTO students(first_name, last_name, email)
VALUES ('John', 'Doe', 'johndoe@example.com'),
       ('Jane', 'Smith', 'janesmith@example.com'),
       ('Michael', 'Johnson', 'michaeljohnson@example.com'),
       ('Emily', 'Davis', 'emilydavis@example.com'),
       ('Chris', 'Brown', 'chrisbrown@example.com');

-- 7.2 Inserción de tabla de cursos
INSERT INTO cursos(title, description)
VALUES ('Introduction to Programming', 'Learn the basics of programming using Python'),
       ('Web Development', 'Build and design websites using HTML, CSS and JavaScript'),
       ('Database Design', 'Understand database concepts and learn SQL'),
       ('Machine Learning', 'Introduction to machine learning, concepts and tools');

-- 7.3 Inserción de tabla de inscripciones
INSERT INTO enrollments(student_id, course_id, grade)
VALUES (1, 1, 'A'),
       (1, 3, 'B'),
       (2, 2, 'A'),
       (2, 4, 'A'),
       (3, 1, 'B'),
       (3, 2, 'C'),
       (4, 2, 'A'),
       (5, 3, 'B'),
       (5, 4, 'A');
