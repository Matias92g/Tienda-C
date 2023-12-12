import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {initializeApp}  from "firebase/app"
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyCQ_uQN2YwgoqWxt4JatNfC7iSMduBQ3oE",
  authDomain: "tienda-c.firebaseapp.com",
  projectId: "tienda-c",
  storageBucket: "tienda-c.appspot.com",
  messagingSenderId: "330996273740",
  appId: "1:330996273740:web:1b13409d829e5c7ad99ae9"
};
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
