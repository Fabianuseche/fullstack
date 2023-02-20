import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CoursesList = () => {
  // llamar a la funcion get_courses
  // usando el hook useState para guardar la lista de cursos
  // y useEffect para hacer el llamado una sola vez

  useEffect(() => {
    // llamar la funcion y establecer el estado
  }, [])
  

  return (
    <div>
      <header>
        <h4>Materias</h4>
        <Link to="/courses/create">Crear Materia</Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Horario</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ingles</td>
            <td>2 - 3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Ingles</td>
            <td>2 - 3</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Ingles</td>
            <td>2 - 3</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
