import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [primeiroNome, setPrimeiroNome] = useState('')
  const [segundoroNome, setSegundoNome] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')

  useEffect(() => {
    if (primeiroNome && segundoroNome) {
      setNomeCompleto(`${primeiroNome} ${segundoroNome}`)
    }
   
    }, [primeiroNome, segundoroNome]);


  return (
      <div className='card'>
        <input type="text"  placeholder="Primeiro Nome" onChange={(e) => setPrimeiroNome(e.target.value)} />
        <br />
        <input type="text" placeholder="Segundo Nome"  onChange={(e) => setSegundoNome(e.target.value)} />
        <br />
        <p>{nomeCompleto}</p>
      </div>
  )
}

export default App
