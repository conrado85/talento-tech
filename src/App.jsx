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
      <section className="clase1">
        <h2>Primera clase</h2>
        <p>Mi primer componente</p>

        <div className="botones">
          <Boton texto="Hola" color="blue" />
          <Boton texto="Adios" color="green" />
          <Boton texto="Chau" color="red" />
        </div>
        <div className="tarjetas">
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+1"} titulo="Tarjeta 1" contenido="Contenido de la tarjeta 1" />
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+2"} titulo="Tarjeta 2" contenido="Contenido de la tarjeta 2" />
          <Tarjeta imagen={"https://placehold.co/600x400?text=Tarjeta+3"} titulo="Tarjeta 3" contenido="Contenido de la tarjeta 3" />
        </div>
      </section>
    </div>
  );
}

export default App;
