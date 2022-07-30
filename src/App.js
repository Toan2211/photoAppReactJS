import React, {Suspense, useState} from 'react'
import {BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
import './App.scss'
import Header from './components/Header';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
const Photo = React.lazy(() => import('./features/Photo'))
function App() {

  return (
    <div className="photo-app">
        <Suspense fallback = {<div>Loading...</div>}>
            <BrowserRouter>
                <Header />
                
                <Routes>
                  <Route path="/" element={<Navigate replace to="/photos" />} />
                  <Route path= "/photos/*" element ={<Photo />}/>
                  <Route element ={<NotFound />}/>
                </Routes> 
            </BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
