import { Outlet } from "react-router";
import Cabecalho from "./compenents/Cabecalho/Cabecalho";
import Rodape from "./compenents/Rodape/Rodape";

export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Outlet />
      <Rodape/>

    </div>
      

  );
}