import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home/Home'
import ProductDetails from './pages/ProductDetails'
import ProductEdit from './pages/productEdit/ProductEdit'

import CommonLayout from './layouts/CommonLayout'

import './styles/global.less'

export const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/product/:id/edit', element: <ProductEdit /> },
      { path: '*', element: <div style={{ padding: 20 }}>404 - Not Found</div> },
    ],
  },
])