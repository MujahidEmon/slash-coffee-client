import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Routes/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import AddCoffeePage from './Pages/AddCoffeePage/AddCoffeePage.jsx'
import UpdatePage from './Pages/UpdatePage/UpdatePage.jsx'
import CoffeeDetailsPage from './Pages/CoffeeDetailsPage/CoffeeDetailsPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addCoffee',
        element: <AddCoffeePage></AddCoffeePage>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/coffeeDetails',
        element: <CoffeeDetailsPage></CoffeeDetailsPage>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
