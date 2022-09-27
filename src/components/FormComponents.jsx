import React from "react";
import { useState } from "react";
import "../style/FormComponents.css";

const FormComponents = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const validarNombre = (nombre) => {
    if (nombre.length >= 5)return true
  }
  const validarApellido = (apellido) => {
    if (apellido.length >= 5)return true;
  }
  const validarDni = (dni) => {
    if (dni.length >= 8)return true;
  };
  const validarEmail = (email) => {
    if (email.length >= 8) return true; 
  };
  
  const validar =()=>{
    if(validarNombre(nombre) === true && validarApellido(apellido)=== true && validarDni(dni)=== true && validarEmail(email)=== true){
      alert("datos enviados")
    }else{
      alert("completa todos los campos")
    }
  }





  return (
    <div className="divFromulario">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validar()
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
          value={dni}
          onChange={(e)=> setDni(e.target.value)}
        />
        <label className="d-flex justify-content-start">Email</label>
        <input
          type="email"
          className="form-control"
          maxLength={50}
          minLength={20}
          required
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
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
