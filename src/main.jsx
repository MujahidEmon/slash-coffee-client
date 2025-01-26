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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addCoffee',
        element: <AddCoffeePage></AddCoffeePage>
      },
      {
        path: '/updateCoffee',
        element: <UpdatePage></UpdatePage>
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
