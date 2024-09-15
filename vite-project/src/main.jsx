import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="640258994888-6t3ms80tocqk1e38kgatg6apdigelmob.apps.googleusercontent.com">
 

  <StrictMode>
 
   <App/>
    
  </StrictMode>
  </GoogleOAuthProvider>
)
