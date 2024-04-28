CREATE DATABASE IF NOT EXISTS student_record_db;

USE student_record_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    roll INT NOT NULL
);
