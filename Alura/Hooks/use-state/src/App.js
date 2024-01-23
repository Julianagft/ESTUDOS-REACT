import './App.css';
import {useState} from 'react';

function App() {

  const [nome, setNome]= useState('Juju');

  function alterarNome() {
    setNome("Maria Juliana Campos Rodrigues");
  }
    

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>{nome}</h1>
        <button onClick={alterarNome}>Mudar para nome completo</button>
      </header>
    </div>
  );
}

export default App;
