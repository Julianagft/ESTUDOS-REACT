import {useState, useRef} from "react";
import "./App.css";

// Usando useState
// useState retorna um array com duas posições: a primeira é a varialvel com o valor e a segunda é a função que altera o valor.

function App() {

  const [frutas, setFrutas]= useState([]);
  const valorRef = useRef(null); 

  
  function frutasParaLi(fruta, index) {
    return <li key={index}>{fruta}</li>
  }

  function addFrutas() {

    const novaFruta = valorRef.current.value;

    if(novaFruta.trim() !== "") {
      //Verifica se o valor não está vazio antes de adicionar a lista;

      const auxiliar = [...frutas, novaFruta];

      setFrutas(auxiliar);

      // Limpa o input antes de continuar;
      valorRef.current.value = "";
    } else {
      alert("Adicione um valor válido a lista")
    }
  }

  function limpar() {
    setFrutas([]);
    valorRef.current.value = "";
  }

  return (
   <div id="app" >
      <h1>Lista de Frutas</h1>
      <input ref={valorRef} type="text" />
      <button onClick={addFrutas} >Novo</button>
      <button onClick={limpar}>Limpar</button>

      <ul>
        {frutas.map(frutasParaLi)}
      </ul>

    </div>
  )
}

export default App;
