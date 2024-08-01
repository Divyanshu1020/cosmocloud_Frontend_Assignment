import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../page/Home"
import AddEmp from "../page/AddEmp"
import DetailsEmp from "../page/DetailsEmp"

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/add",
          element: <AddEmp/>
        },
        {
          path: "/details/:id",
          element: <DetailsEmp/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
