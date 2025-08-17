import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import AppRoutes from './routes/routes'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppRoutes />
    </StyledEngineProvider>
  </React.StrictMode>
)
