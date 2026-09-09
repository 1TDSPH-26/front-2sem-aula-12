<<<<<<< HEAD
import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet/>
      <Rodape/>
    </div>
  )
=======
//comando rfc 

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
    return(
        <div>
            <Cabecalho />
            <Conteudo />
            <Rodape />
        </div>
    );
>>>>>>> 3ef486014811e7917ce0b38da4a92a6eac8a9519
}
