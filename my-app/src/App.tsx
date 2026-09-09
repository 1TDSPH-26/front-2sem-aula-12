import Cabecalho from "./components/Cabecalho/Cabecalho";
import { Outlet } from "react-router";
import Rodape from "./components/Rodape/Rodape";
import ObservadorDeRota from "./components/ObservadorDeRota";

export default function App(){
  return(
    <>
      <ObservadorDeRota/>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}