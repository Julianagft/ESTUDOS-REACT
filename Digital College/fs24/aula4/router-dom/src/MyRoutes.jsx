import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Contatos from "./pages/Contatos";
import SobreNos from "./pages/SobreNos";


function MyRoutes() {
    return (
        <>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/sobre" element={<SobreNos />} />

            <Route path="*" element={<h1>Não encontrado</h1>} /> 
            {/* qualquer rota diferente dessa não será encontrada. */}
        </Routes>
        
      </>
    )
}

export default MyRoutes;