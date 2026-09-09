import Home from './routes/Home';
import Produtos from './routes/Produtos';
import EditarProdutos from './routes/EditarProdutos';
import Error from './routes/Error';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
