import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'; 
import {HomePage, ProductPage, ProductsPage} from './pages'
import { Navbar, Footer } from './components';
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="div" style={{marginTop: '40px'}}></div>
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