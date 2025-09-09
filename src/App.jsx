import Boton from "./components/boton/Boton";
import "./App.css";
import Tarjeta from "./components/tarjeta/Tarjeta";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar  />
      <h1>Talento Tech. </h1>
      <p>Son los primeros pasos en react.</p>
      <section className="clase1" id="clase1">
        <h2>Primera clase</h2>
        <p>Mi primer componente</p>

        <div className="botones">
          <Boton texto="Hola" color="blue" />
          <Boton texto="Adios" color="green" />
          <Boton texto="Chau" color="red" />
        </div>
        <div className="tarjetas">
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+1"} titulo="Oferta especial " contenido="20% de descuento en todos los productos" textoBoton="Ver más" />
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+2"} titulo="Oferta especial " contenido="20% de descuento en todos los productos" textoBoton="Ver más" />
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+3"} titulo="Oferta especial " contenido="20% de descuento en todos los productos" textoBoton="Ver más" />
        </div>
      </section>
      <section className="clase2" id="clase2">
        <h2>Segunda clase</h2>
        <p>Mi segundo componente</p>
      </section>
      <section className="clase3">
        <h2>Tercera clase</h2>
        <p>Mi tercer componente</p>
      </section>
    </div>
  );
}

export default App;
