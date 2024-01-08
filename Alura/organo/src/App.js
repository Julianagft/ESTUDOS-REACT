import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formularios/index.js';
// Para não repetir o import para cada arquivo nomeamos todos os componentes como index.js
function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
      
      
    </div>
  );
}

export default App;
