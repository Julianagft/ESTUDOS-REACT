import {useRef} from "react";
import "./App.css";

// Usando useRef

function App() {

  const conteudoRef = useRef(null);
  const retornoRef = useRef(null);
  const appRef = useRef(null);

  function mostrar() {
    retornoRef.current.textContent = conteudoRef.current.value
  }

  function mudarCor(evento) {
    appRef.current.style.backgroundColor = evento.target.value
  }

  return (
   <div id="app" ref={appRef}>
    <h1 ref={retornoRef}>Escolha o texto</h1>
    <input name="filtro" type="text" ref={conteudoRef} />
    <button onClick={mostrar}>Mostrar</button>
    <br />
    <input onChange={mudarCor}  type="color"/>
   </div>
  )
}

export default App;
