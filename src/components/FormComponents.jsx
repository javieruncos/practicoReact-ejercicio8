import React from "react";
import { useState } from "react";
import "../style/FormComponents.css";

const FormComponents = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const validarNombre = (nombre) => {
    if (nombre.length >= 5) {
      console.log("nombre correcto");
    } else {
      console.log("nombre incorrecto");
    }
  };
  const validarApellido = (apellido) => {
    if (nombre.length >= 5) {
      console.log("apellido correcto");
    } else {
      console.log("apellido incorrecto");
    }
  };
  






  return (
    <div className="divFromulario">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validarNombre(nombre);
          validarApellido(apellido)
        }}
      >
        <h1>Formulario</h1>
        <label className="d-flex justify-content-start" name="nombre">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          maxLength={40}
          minLength={5}
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className="d-flex justify-content-start">Apellido</label>
        <input
          type="text"
          className="form-control"
          maxLength={30}
          minLength={10}
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label className="d-flex justify-content-start">DNI</label>
        <input
          type="number"
          className="form-control"
          maxLength={8}
          minLength={8}
          required
        />
        <label className="d-flex justify-content-start">Email</label>
        <input
          type="email"
          className="form-control"
          maxLength={50}
          minLength={20}
          required
        />
        <button
          type="submit"
          className="btn btn-primary d-flex justify-content-start my-3"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormComponents;
