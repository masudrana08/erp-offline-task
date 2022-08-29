import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import swDev from './swDev';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct';
import ShowProduct from './pages/ShowProduct';
import ShowSells from './pages/ShowSells';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/show-products" element={<ShowProduct />} />
            <Route path="/show-sells" element={<ShowSells />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
swDev()

