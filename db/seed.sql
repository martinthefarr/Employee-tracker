USE employee_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("HR"),
       ("dep3"),
       ("dep4"),
       ("dep5");
       
INSERT INTO role (title, salary, department_id)
VALUES ("machinist", 10, 3),
 ("electrician", 15, 1),
 ("prz", 20, 2),
 ("boss", 25, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Arthur", "Miller", 1, NULL),
       ("Chinua", "Achebe", 2, 1),
       ("Margaret", "Atwood", 3, 1),
       ("Gabriel", "Garcia Marquez", 4, 1),
       ("Simone", "de Beauvoir", 4, 1);
       



       