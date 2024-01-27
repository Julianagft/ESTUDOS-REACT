import { useState, useEffect } from 'react';
import './App.css'


function App() {
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    async function getData() {
      try{
        const requisicao = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
  
        const data = await requisicao.json();
        setEstado(data)
      } catch (error) {
        console.error("Erro de fetching", error);
      }
    }   

    getData();
  }, []);
 

  return (
    <>
      <div className='card'>
      <label htmlFor="estadosSelect">Estados do País:</label>
        <select defaultValue={null} >
          <option value={null}>Selecione</option>
          {estado.map((estado, posicao) => (
            <option key={posicao} value={"Selecione um estado"}>
              {`${estado.nome} - ${estado.sigla}`}
            </option>
          ))}
        </select>
      </div>
      
    </>
  )
}

export default App
