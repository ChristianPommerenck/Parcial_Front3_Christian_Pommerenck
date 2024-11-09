import React, { useState } from "react";
import Card from "./Card";
import {form} from "../styles/Form.module.css"
import {text} from "../styles/Form.module.css"

const Form = () => {
  
  const [lector, setLector] = useState({
    nombre: "",
    libro: "",
    libroBuscado: "",
    numero: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let regexNombre = /^[a-zA-Z0-9]+$/;
    let regexNumero = /^\+(?:[0-9] ?){6,14}$/;
    
    if (
      lector.nombre.length > 3 &&
      regexNombre.test(lector.nombre) &&
      lector.libro.length > 6 &&
      regexNumero.test(lector.numero)
    ) {
      setMostrar(true);
      console.log(setMostrar)
    } else {
      setError(true);
      console.log(setError)
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className={form}>
          <label>Nombre:</label>
          <input className={text}
            type="text"
            onChange={(e) =>
              setLector({ ...lector, nombre: e.target.value })
            }
          />
          <label>Libro Favorito:</label>
          <input className={text}
            type="text"
            onChange={(e) =>
              setLector({ ...lector, libro: e.target.value })
            }
          />
           <label>Libro buscado</label>
          <input className={text}
            type="text"
            onChange={(e) =>
              setLector({ ...lector, libroBuscado: e.target.value })
            }
          />
          <label>Numero telefonico:</label>
          <input className={text}
            type="text"
            onChange={(e) =>
              setLector({ ...lector, numero: e.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
        </form>
        {mostrar ? (
        <Card nombre={lector.nombre} libro={lector.libro} libroBuscado={lector.libroBuscado} numero={lector.numero}/>
      ) : null}
    </div>
  );
};

export default Form;