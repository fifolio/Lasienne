import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path:"/",
    element:<span>Home</span>
  },
  {
    path:"/category/:id",
    element:<span>Category</span>
  },
  {
    path:"/product/:id",
    element:<span>Product</span>
  }
])

export default function App(){
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}