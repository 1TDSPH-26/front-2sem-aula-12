import { Outlet } from 'react-router'; // 1. Importe o Outlet
import Cabecalho from "./components/Cabecalho/Cabecalho";
// 2. Apague a importação do Conteudo
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      {/* 3. Troque o <Conteudo /> pelo <Outlet /> */}
      <Outlet /> 
      <Rodape/>
    </div>
  )
}