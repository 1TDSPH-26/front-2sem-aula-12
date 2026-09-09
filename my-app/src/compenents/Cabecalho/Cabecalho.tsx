import { Link } from 'react-router'

export default function Menu(){
    return(
        <header>
            <h1>Meu cabeçalho</h1>
            <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/editar-produtos">Editar Produtos</Link></li>
      </ul>
    </nav>
        </header>
    )
}