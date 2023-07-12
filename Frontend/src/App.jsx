import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; 
import {HomePage, ProductPage, ProductsPage} from './pages'
import { Navbar, Footer } from './components';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<HomePage />
      },
      {
        path:"/product/:id",
        element:<ProductPage />
      },
      {
        path:"/products/:id",
        element:<ProductsPage />
      },
    ]
  }
])

export default function App(){
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}