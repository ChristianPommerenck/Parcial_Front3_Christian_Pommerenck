import React from 'react'
import {cardContainer} from "../styles/Card.module.css"

export const Card = ({ nombre, libro, libroBuscado, numero}) => {
  return (
    <div className={cardContainer}>
      <h3>Gracias, {nombre}!</h3>
      <h4>Te enviaremos un mensaje al numero {numero} cuando tengamos el libro {libroBuscado}</h4>
      <h4>Mientras tanto sigue disfrutando de {libro}!</h4>
    </div>
  )
}

export default Card;