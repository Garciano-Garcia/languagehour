import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StudentPortal from './StudentPortal.jsx'
import './styles.css'

const page = window.location.pathname.replace(/\/+$/, '') === '/portal-do-estudante'

createRoot(document.getElementById('root')).render(<React.StrictMode>{page ? <StudentPortal /> : <App />}</React.StrictMode>)
