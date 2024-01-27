import { useState, useEffect } from 'react';
import './App.css'


function App() {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    async function getData() {
      try{
        const requisicao = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos");
  
        const data = await requisicao.json();
        setCidades(data)
      } catch (error) {
        console.error("Erro de fetching", error);
      }
    }   

    getData();
  }, [])
 

  return (
    <>
      <div className='card'>
       <table >
          <tr>
            <th>Nome da Cidade</th>
          </tr>
          {cidades.map((cidade, posicao) => (
            <tr key={posicao}><td>{cidade.nome}</td></tr>
          ))}
        </table>
      </div>
      
    </>
  )
}

export default App
