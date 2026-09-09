import { Link } from "react-router";


export default function Cabecalho() {

    return(

        <header>
            <h1>E-commerce</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/editar-produtos">Editar Produtos</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </nav>
        </header>
    )
}