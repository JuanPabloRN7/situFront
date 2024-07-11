import './App.css';
import React from "react";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Logincliente from './componentes/logincliente/Logincliente';
import Loginadministrador from './componentes/loginadmin/Loginadministrador';
import Inicio from './componentes/inicioc/Inicio';
import Admivista from './componentes/administrador/Admivista';
import { EstaSession } from './utilidades/UseSession';
import IngresoBuses from './componentes/buses/IngresoBuses';
import Tarjetas from './componentes/tarjetas/Tarjetas';
import Ingresopasajeros from './componentes/pasajeros/Ingresopasajeros';
import Pasajeros from './componentes/IngresarPasajeros/Pasajeros';
import Nanvar from './componentes/nanvar/Nanvar';



function App() {

  const Middleware = ({ children }) => {
    const autenticado = EstaSession();
    const location = useLocation();
    if(autenticado){
      return children;
    } else {
      return <Navigate to="/" state={location} />
    }
  }
  const MiddlewareSession = ({ children }) => {
    const autenticado = EstaSession();
    //const location = useLocation();
    if(autenticado){
      return <Navigate to="/admin"/>;
    } else return children;
  }

  return (
    <div>
      <Nanvar/>
      <Routes>
        <Route path='/' element={<MiddlewareSession><Inicio/></MiddlewareSession>}></Route>
        <Route path='/logincliente' element={<MiddlewareSession><Logincliente/></MiddlewareSession>}></Route>
        <Route path='/loginadmin' element={<MiddlewareSession><Loginadministrador/></MiddlewareSession>}></Route>
        <Route path='/admin' element={<Middleware><Admivista/></Middleware>}></Route>
        <Route path='/ingresobuses' element={<Middleware><IngresoBuses/></Middleware>}></Route>
        <Route path='/tarjetas' element={<Middleware><Tarjetas/></Middleware>}></Route>
        <Route path='/Ingresopasajeros' element={<Middleware><Ingresopasajeros/></Middleware>}></Route>
        <Route path='/pasajeros' element={<Middleware><Pasajeros/></Middleware>}></Route>
      </Routes>

    </div>
  );
}

export default App;
