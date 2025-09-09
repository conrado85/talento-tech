
import React from 'react';
import "./NavBar.css";  
function NavBar() {

    const  listado = ["Home", "About", "Services", "Contact"];


  return (
    <div className="navbar">
      <div className="navbar-logo">My Website</div>
      <div className="navbar-links">
        {listado.map((lista, index, array) => (
          <a key={index} href={`#${lista}`} className="navbar-link">
            {array[index]} {/* Utilizamos array[index] para acceder al elemento en la posición actual también podemos usar lista */}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavBar

