import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from 'components/Layout'

import Home from 'pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
