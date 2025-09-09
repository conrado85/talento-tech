
import './boton.css'

function Boton({texto,color}) {
    
    const estilos = {
        backgroundColor: color,
        // borderRadius: '30px',
        // border: '3px solid transparent',
        // padding: '0.6em 1.2em',
        // fontSize: '1em',
        // fontWeight: 500,
        // fontFamily: 'inherit',
        // cursor: 'pointer',
        // transition: 'border-color 0.25s'

    }

  return (
    <div>
      <button className='boton'style={estilos}onClick={() => alert(texto)} >{texto}</button>
    </div>
  )
}

export default Boton
