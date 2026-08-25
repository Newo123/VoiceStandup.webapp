import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './providers/AppProvider'
import { Router } from './router/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider>
            <Router />
        </AppProvider>
    </StrictMode>,
)
