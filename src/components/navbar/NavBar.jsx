
import React from 'react';
import "./navBar.css";  
function NavBar() {

    const  listado = ["clase1", "clase2", "clase3", "clase4"];


  return (
    <div className="navbar">
      <div className="navbar-logo">My Website</div>
      <div className="navbar-links">
        <ul className="navbar-list">
          {listado.map((lista, index, array) => (
            <li key={index}>
              <a href={`#${lista}`} className="navbar-link">
                {array[index]} {/* Utilizamos array[index] para acceder al elemento en la posición actual también podemos usar lista */}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-buttons">
          <a href="/prueba" className="navbar-button">Ir a Prueba</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar

