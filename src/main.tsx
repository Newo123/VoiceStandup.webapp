import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './app/providers/AppProvider'
import { Router } from './app/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider>
            <Router />
        </AppProvider>
    </StrictMode>,
)
