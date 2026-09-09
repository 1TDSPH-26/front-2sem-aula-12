import { Outlet } from "react-router";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Rodape from "./components/rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet/>
      <Rodape/>
    </div>
  )
}