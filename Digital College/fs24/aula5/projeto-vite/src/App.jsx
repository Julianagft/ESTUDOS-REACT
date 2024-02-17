// BIBLIOTECA AXIOS

import axios from 'axios';
import './App.css'

function App() {
  
  //Estamos definindo a URL base onde faremos nossas requisições; 
  const apiJSH = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  })

async function buscarUsuario() {
   //Em relação ao codigo ele é parecido com o Fetch mas ele da uma resposta muito mais completa no console. Além disso não precisamos transformar o arquivo em JSON pois ele já trabalha com arquivos json. 

    const response = await apiJSH.get("/users") //Aqui só estamos definindo o recurso que estaremos usando, assim não é necessário repetir a URL todas as vezes;

    console.log(response.data) //o data faz parte do objeto retornado pelo axios;
  }


  async function criarUsuario() {
    const usuario = {
      nome: "Eu",
      email: "email@email.com"
    }

    const response = await apiJSH.post("/users", usuario)
    console.log(response);
  }

  async function deletarUsuario() {
    
    const response = await apiJSH.delete("/users/3")
    console.log(response);
  }



  return (
    <div>
      <button onClick={buscarUsuario}>Buscar</button>
      <button onClick={criarUsuario}>Criar</button>
      <button onClick={deletarUsuario}>Deletar</button>
    </div>
  )
}

export default App;
