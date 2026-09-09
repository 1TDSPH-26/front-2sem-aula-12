import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Passo 5: Importando as ferramentas do React Router
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App.tsx'

// Passo 4: Importando as telas
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'

// Passo 6: Criando o mapa (lista) de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Essa tela aparece se o usuário digitar um endereço que não existe
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar-produtos", element: <EditarProdutos /> }
    ]
  }
]);

// Passo 7: Ligando o roteador na aplicação
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)