import './App.css';
import { useState } from 'react';

function App() {

  const [resultado, setResultado] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [tema, setTema] = useState("light ")


  function mudarTema() {
    setTema(tema === "light " ? "dark" : "light ")
  }

  return (
    <div className={`${tema} container`}>
        <div className="eachRowItem leftSide">
            <div>
                <div className="title">
                    simple cal
                </div>
                <div id="buttonTheme" onClick={mudarTema}>
                    <i id="icon" className="fa fa-moon"></i>
                </div>
            </div>
            <input id="inputCalc" placeholder="25x10" onChange={(e) => setTextInput(e.target.value)} value={textInput} />
            <button className='buttonCalc' onClick={() => setResultado(eval(textInput))}>Calcular</button>
            <div>*press enter to find out the total</div>
        </div>                                                                    
        <div className="eachRowItem rightSide">
            <div>
                <div id="buttonThemeHistoric">
                    <i id="iconHistoric" className="fas fa-history" ></i>
                </div>
            </div>
            <div id="resultCalc" className="resultText">{resultado}</div>
            <div id="historicDiv" className="historicList">
               
            </div>
            <div>→ view keyboard shortcuts</div>
        </div>
    </div>
  );
}

export default App;
