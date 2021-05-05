import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VideosProvider } from './contexts/Librarycontext';


ReactDOM.render(
  <React.StrictMode>
    <VideosProvider>
    <App />
    </VideosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

