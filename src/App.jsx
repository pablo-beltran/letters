import { useState } from 'react'
import Decision from './Decision'
import macaco from './img/macaco-deprimido.jpg'
import cat from './img/cat-clown.jpg'

function App() {
  const [tipoEscrito, setTipoEscrito] = useState('')

  const mostrarEscrito = () =>{
    setTipoEscrito('escritoSolo')
  }

  const mostrarEscritoContexto = () =>{
    setTipoEscrito('escritoContexto')
  }

  const volverInicio = () => {
    setTipoEscrito('')
  }

  return (
    <div className=''>
      <h1 className='text-center text-[50px] font-bold text-white mt-5 mb-5'>{tipoEscrito === '' ? 'Comencemos': ''}</h1>
      <div className= {tipoEscrito === '' ? 'flex justify-evenly transition-all': 'flex justify-center'}>

        {
          tipoEscrito === '' ?
          (<>
            <div className='imgGrisIn'>
              <img src={cat} className='imgSize' onClick={mostrarEscrito} alt=""/>
              <p className='text-center font-semibold text-white text-2xl'>una imagen</p>
            </div>

            <div className='imgGrisIn'>
              <img src={macaco} onClick={mostrarEscritoContexto} className='imgSize' alt=""/>
              <p className='text-center font-semibold text-white text-2xl'>otra imagen</p>
            </div>
           </>
          ):(
            tipoEscrito === 'escritoSolo' ? (
              <>
                <div className='imgGrisOut aparecerOpciones'>
                  <img src={cat} className='imgSize' onClick={volverInicio} alt=""/>
                  <p className='text-center font-semibold text-white text-2xl'>una imagen</p>
                </div>
              </>
            ):
            (
              <>
                <div className='imgGrisOut aparecerOpciones'>
                  <img src={macaco} onClick={volverInicio} className='imgSize' alt=""/>
                  <p className='text-center font-semibold text-white text-2xl'>otra imagen</p>
                </div>
              </>
            )   
          )
        }
      </div>
      {tipoEscrito === 'escritoSolo' ? (<p className='aparecerOpciones'  >hay escrito</p>):(<p className='desaparecerOpciones'>no hay escrito</p>)}


    </div>
  )
}

export default App
