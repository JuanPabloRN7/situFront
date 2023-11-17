import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nanvar = () => {
    return (
        <div style={{ backgroundColor: "#7297d9", borderStyle: "solid" }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active" style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1042/1042266.png"
                                    width={"50"}
                                    height={"55"}
                                ></img>
                                <Link className="nav-link" to="/IngresoBuses"> <h4><b>Buses</b> </h4></Link>
                            </li>
                            <li className="nav-item mx-3" style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/1605/1605350.png"
                                    width={"50"}
                                    height={"55"}
                                ></img>
                                <Link className="nav-link" to="/IngresoClientes"><h4><b>Clientes </b></h4></Link>
                            </li>
                            <div className='ml-3'>
                                <Link className="btn btn-dark" to="/">  <p className='justify-content-center' style={{ color: "#FFFFFF" }}> <b>Cerrar Sesion </b> </p>  </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nanvar;