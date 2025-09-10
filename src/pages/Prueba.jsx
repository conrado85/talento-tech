import React from 'react'

function prueba() {

    const  listado = ["Ana", "Juan", "Pedro", "Maria"];
  return (
    <div>
      <ul>
        {listado.map(nombre =>(
          <li key={nombre}>{nombre}</li>        
        ))}
      </ul>
    </div>
  )
}

export default prueba
