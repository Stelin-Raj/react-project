import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import DisplayFormDataInTable from './displayData'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Weather from './Weather';
import TableEffect from './TableJson';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">React Js</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" aria-current="page" to="/displayData">CRUD</Link>
              <Link className="nav-link" to="/Weather">WeatherApp</Link>
              <Link className="nav-link" to="/TableJson">JsonTable</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/displayData' element={<DisplayFormDataInTable />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/TableJson' element={<TableEffect />} />
      </Routes>
    </div>
  </Router>
);

reportWebVitals();
