<<<<<<< HEAD
import { Outlet } from 'react-router'; // 1. Importe o Outlet
import Cabecalho from "./components/Cabecalho/Cabecalho";
// 2. Apague a importação do Conteudo
import Rodape from "./components/Rodape/Rodape";
=======
import Cabecalho from './components/Cabecalho/Cabecalho';
import Conteudo from './components/Conteudo/Conteudo';
import Rodape from './components/Rodape/Rodape';
>>>>>>> 61c27dd30471a42e29beceb8e9d990298b060df3

export default function App() {
  return (
    <div>
      <Cabecalho />
<<<<<<< HEAD
      {/* 3. Troque o <Conteudo /> pelo <Outlet /> */}
      <Outlet /> 
      <Rodape/>
    </div>
  )
=======
      <Conteudo />
      <Rodape />
    </div>
  );
>>>>>>> 61c27dd30471a42e29beceb8e9d990298b060df3
}