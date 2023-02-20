import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <section className="menu">
        <p>
          <Link to="/courses">Materias</Link>
        </p>
        <p>
          <Link to="/students">Estudiantes</Link>
        </p>
        <p>
          <Link to="/teachers">Profesores</Link>
        </p>
      </section>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
