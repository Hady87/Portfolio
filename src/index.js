

import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';



// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <>
     
    <App />
    
  </>,
);


