import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AppProvider } from './app/providers/AppProvider'
import { Router } from './app/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Router />
            </AppProvider>
        </BrowserRouter>
    </StrictMode>,
)
