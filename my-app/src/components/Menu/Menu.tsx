import { Link } from 'react-router';

export default function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/editar-produtos">Editar Produtos</Link></li>
        </ul>
    </nav>
  );
}