
import './tarjeta.css'
function Tarjeta({titulo, contenido, imagen}) {
  return (
    <div className="tarjeta">
      <img src={imagen} width={300} height={150} alt="Imagen de la tarjeta" />
      <h3>{titulo}</h3>
      <p>{contenido}</p>
    </div>
  )
}

export default Tarjeta
