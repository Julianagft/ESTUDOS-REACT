import { useState } from 'react'
import './App.css'

function App() {

  const [primeiroNome, setPrimeiroNome] = useState('')
  const [segundoroNome, setSegundoNome] = useState('')

const nomeCompleto = () => {
  
}

  // const [count, setCount] = useState(0)

  // const increment = () => {
  //   setCount(count+2);
  // }

  // const reset = () => {
  //   setCount(0)
  // }



  return (
      <div className='card'>
        <input type="text"  placeholder="Primeiro Nome" onChange={(e) => setPrimeiroNome(e.target.value)} />
        <br />
        <input type="text" placeholder="Segundo Nome"  onChange={(e) => setSegundoNome(e.target.value)} />
        <br />
        {/* <button onClick={increment}>count is {count}</button> */}
        <br />
        {/* <button onClick={reset}>Limpar</button> */}
        <p>{`${primeiroNome} ${segundoroNome}`}</p>
      </div>
  )
}

export default App
