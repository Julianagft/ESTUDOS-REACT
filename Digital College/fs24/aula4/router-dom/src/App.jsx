import './App.css';
import MyRoutes from './MyRoutes';
import Menu from './components/menu';


function App() {

  // const [paginaAtual, setPaginaAtual] = useState("home");

  // function renderizarCondicional(paginaAtual) {

  //   // switch(paginaAtual) {
  //   //   case "/home":
  //   //     return <Home />
  //   //   case "/contatos":
  //   //     return <Contatos />
  //   //   case "/sobre":
  //   //     return <SobreNos />
  //   //   default:
  //   //   break;
  //   // }

  //   // if(paginaAtual === "home") {
  //   //   return <h1>Você está na Home</h1>
  //   // } else if(paginaAtual === "contatos"){
  //   //   return <h1>Você está na página 'Contatos'</h1>
  //   // } else if(paginaAtual === "sobre") {
  //   //   return <h1>Você está na página 'Sobre Nós'</h1>
  //   // }
  // }

  return (
    <>
      <Menu />
      <MyRoutes />
    
    </>
  )
}

export default App
