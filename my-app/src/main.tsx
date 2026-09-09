import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Home/Produtos/index.tsx'
import EditarProdutos from './routes/Home/EditarProdutos/index.tsx'
import Error from './routes/Home/Error/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/produtos',
    element: <Produtos />
  },
  {
    path: '/editar-produtos',
    element: <EditarProdutos />
  },
  {
    path: '*',
    element: <Error />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)