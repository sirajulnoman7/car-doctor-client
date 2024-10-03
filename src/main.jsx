import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Route.jsx'
import AuthProviders from './Providers/AuthProvides/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto'>
      <AuthProviders>
        <RouterProvider router={router}>

        </RouterProvider>
      </AuthProviders>
    </div>
  </StrictMode>,
)
