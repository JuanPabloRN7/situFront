import './App.css';
import React from "react";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Logincliente from './componentes/logincliente/Logincliente';
import Loginadministrador from './componentes/loginadmin/Loginadministrador';
import Inicio from './componentes/inicioc/Inicio';
import Admivista from './componentes/administrador/Admivista';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/logincliente' element={<Logincliente />}></Route>
        <Route path='/loginadmin' element={<Loginadministrador />}></Route>
        <Route path='/admin' element={<Admivista />}></Route>
      </Routes>

    </div>
  );
}

export default App;
