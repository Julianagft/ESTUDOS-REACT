import {useState} from "react";
import "./App.css";

// Usando useState
// useState retorna um array com duas posições: a primeira é a varialvel com o valor e a segunda é a função que altera o valor.

function App() {

  const [frutas, setFrutas]= useState([]);
  
  function frutasParaLi(fruta) {
    return <li>{fruta}</li>
  }

  function addFrutas() {
    
    const auxiliar = [...frutas, "uva"];
    
    setFrutas(auxiliar)
  }

  return (
   <div id="app" >

      <input  type="text" />
      <button onClick={addFrutas} >Novo</button>

      <ul>
        {frutas.map(frutasParaLi)}
      </ul>

    </div>
  )
}

export default App;
