import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

function App() {

  const [racas, setRacas] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/doguinhos')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados);
        setRacas(dados);
      })
      .catch(erro => {
        console.error('Erro na requisição:', erro);
      });
  }, []); //O Array vazio é a forma que o useEffect tem para avisar ao react que só queremos executar aquela lista uma única vez. 

  useEffect(() => {
    if(busca && busca.length >= 3) {
      fetch(`http://localhost:3000/doguinhos?nome=${busca}`)
        .then(resposta => resposta.json())
        .then(dados => {
          console.log(dados);
          setRacas(dados)
      })
      .catch(erro => {
        console.error('Erro na requisição de busca:', erro);
      });
    } 
  }, [busca]) //Aqui eu mostro que não quero que seja modificado apenas uma vez, mas sempre que o elemento 'busca' mudar;
  
  return (
   <div className='App'>
    <h1>Bem vindo ao doguinhos!</h1>
    <h4>Confira abaixo uma lista de raças  dos doguinhos</h4>
    <input onChange={evento => setBusca(evento.target.value)} type="text" placeholder='Buscar por raça' />
    <ul>
      {racas.map((raca) => <li key={raca.id}>{raca.nome}</li>)}
    </ul>
   </div>
  )
}

export default App;
