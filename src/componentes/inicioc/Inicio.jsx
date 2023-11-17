import React from 'react';
import '../../css/Bootstrap.css'
import { Link, useNavigate } from 'react-router-dom';

const Inicio = () => {
    return (
        <div className="container" >
            <div className="row d-flex justify-content-center pt-4">
                <h1 className="font-weight-bold mx-3 "> SISTEMA DE PAGO DE TRANSPORTE SITU</h1>
                <img
                    src="https://play-lh.googleusercontent.com/sGDZxxAaYdGyXaeBD16M7cDGJ3GOuU6vrys3T2BNRlIzoVX-Gd_487V9XiG1T1HxMUE=w240-h480-rw"
                    width={"50"}
                    height={"55"}
                ></img>
            </div>
            <div className="row d-flex justify-content-center pt-4">
                <img
                    src="https://situloja.com/img/bus.png"

                ></img>
            </div>
            <div className="row d-flex justify-content-center pt-5">
                <div className="mx-5 mt-4">
                    <button type="submit" className="btn btn-dark"> <Link className="btn btn-dark" to="/loginadmin"> <h4> <b>Administrador</b> </h4></Link></button>
                </div>
                <div className="mx-5 mt-4">
                    <button type="submit" className="btn btn-dark"> <Link className="btn btn-dark" to="/logincliente"> <h4> <b>Cliente</b> </h4></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Inicio;