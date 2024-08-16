-- 1. Create database
CREATE TABLE bootcamp_db;

-- 2.Crear la tabla students

CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(100)NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	email VARCHAR(150)UNIQUE NOT NULL
);

-- 3. Crear la tabla de cursos

CREATE TABLE cursos(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255)NOT NULL,
	description TEXT
);

-- 4.Crear la tabla de enrollments

CREATE TABLE enrollments(
	id SERIAL PRIMARY KEY,
	student_id INT REFERENCES students(id) ON DELETE CASCADE,
	course_id INT REFERENCES course(id)ON DELETE CASCADE,
	grade VARCHAR(5)
);

-- 5. Relaciones entre las tablas
/* **Relacion de uno a muchos**; 'students' y 'enrollments'
    - Un estudiante puede estar inscrito en varios cursos.
    -Un curso puede tener varios estudiantes inscritos.

    **Relacion muchos a muchos**; 'students' y 'course' a traves de la tabla 'enrollments'
    -Esto se logra con las llaves foraneas 'students_id' y 'course_id' en la tabla 'enrollments'
*/
-- 6. Verificar la Estructura
SELECT* FROM students;
SELECT* FROM course;
SELECT* FROM enrollments;

-- 7.Introducción de database
-- 7.1 Insercion de tabla de estudiantes
INSERT INTO students(first_name, last_name, email)
VALUES('John', 'Doe', 'johndoe@example.com'),
		('Jane', 'Smith', 'janesmith@example.com'),
		('Michael', 'Johnson', 'michaeljohnson@example.com'),
		('Emily', 'Davis', 'emilydavis@example.com'),
		('Chris', 'Brown', 'chrisbrown@example.com');

-- 7.2 Insercion de tabla de cursos
INSERT INTO course(title, description)
VALUES('JohnIntroduction to Programming', 'Learn the basics of programming using Python'),
		('Web Development', 'Build and design websites using HTML, CSS and JavaScript'),
		('Database Design', 'Undertand database concepts and learn SQL'),
		('Machine Learning', 'Introduction to machine learning, concepts and tools');
		
