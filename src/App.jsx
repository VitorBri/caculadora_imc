import React, { useState } from 'react'
import Header from './components/Header'
import Tabela from './components/Tabela'
import Resultado from './components/Resultado'

function App() {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setImc] = useState(null)
    const [mostrarResultado, setMostrarResultado] = useState(false)
    
    const calculaImc  = (evento) => {
        evento.preventDefault()

        setMostrarResultado(false)

        const alturaEmMetros = parseFloat(altura/100)
        const pesoNumerico  = parseFloat (peso)

        const imcCalculado = pesoNumerico / (alturaEmMetros * alturaEmMetros )

        setImc(imcCalculado.toFixed(2))

        setTimeout(() => {
          setMostrarResultado(true)
        }, 1000)

    }


  return (
    <div className='container'>
        <Header
          altura={altura}
          setAltura={setAltura}
          peso={peso}
          setPeso={setPeso}
          calculaImc={calculaImc}
        />
        {mostrarResultado && imc && (
          <>
          <Tabela imc={imc}/>
          <Resultado imc={imc}/>
          </>
        )}
        
    </div>
  )
}

export default App
