import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from 'components/Layout'

import Home from 'pages/Home'
import { Bank } from 'pages/Bank'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/bank',
        element: <Bank />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
