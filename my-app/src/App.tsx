import Cabecalho from "./components/Cabecalho/Cabecalho";
import { Outlet } from "react-router";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}