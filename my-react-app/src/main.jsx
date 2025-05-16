
import { createRoot } from 'react-dom/client'
import './index.css'; // Tailwind (usually already imported)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // If using JS components


import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  
)
