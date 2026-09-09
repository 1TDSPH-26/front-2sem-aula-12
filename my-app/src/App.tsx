import { Outlet } from "react-router";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

export default function App(){

  return(
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  );
}