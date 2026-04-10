import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routers/Routes.jsx'
import CourtsProvider from './providers/CourtsProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <CourtsProvider>
          <RouterProvider router={router} />
        </CourtsProvider>
    </AuthProvider>
  </StrictMode>,
)
