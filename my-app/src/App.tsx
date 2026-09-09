import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

function Sobre() {
  return (
    <main>
      <section>
        <h2>Sobre</h2>
        <p>Página simples de exemplo de navegação.</p>
      </section>
    </main>
  );
}

function Contato() {
  return (
    <main>
      <section>
        <h2>Contato</h2>
        <p>contato@exemplo.com</p>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Conteudo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Rodape />
      </div>
    </BrowserRouter>
  );
}
