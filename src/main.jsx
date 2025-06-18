// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'



import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './context/AppContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
  <AppContextProvider>
        <App />
    </AppContextProvider>
    </BrowserRouter>

);
