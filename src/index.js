import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<BrowserRouter>
    	<AppRouter />
		</BrowserRouter>
  </React.StrictMode>
);