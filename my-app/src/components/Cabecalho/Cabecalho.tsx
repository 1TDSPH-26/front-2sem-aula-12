import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
        <h1>Meu Boiler Plate</h1>
        <nav>
            <ul>
                <li><Link to="/">Item-1</Link></li>
                <li><Link to="/sobre">Item-sobre</Link></li>
                <li><Link to="/contato">Item-contato</Link></li>
            </ul>
        </nav>
    </header>
  )
}
