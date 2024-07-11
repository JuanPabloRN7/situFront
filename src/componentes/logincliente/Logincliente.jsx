import React from 'react';
import { BuscarTarjetas } from '../../hooks/ConexionSw';
import { useState,useEffect } from 'react';


const Logincliente = () => {

    const [llamada, setllamada] = useState(false);
    const [info, setInfo] = useState(false);
    const [codigo, setCodigo] = useState(false);

   /* const handleChange = (event) => {
            setCodigo(event.target.value);
            console.log(codigo);
    };


    useEffect(() => {
        // Realizar la llamada a la API solo cuando cambia el código
        if (codigo && !llamada) {
          BuscarTarjetas(codigo).then(
            (data) => {
               setllamada(true);
              setInfo(data);
              console.log("--"+data);
            },
            (error) => {
              console.log("Hubo un error en la consulta");
            }
          );
        }
      }, [codigo, llamada]);*/
    

    return (
        <section className=" vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="container col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderradius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase"><b>Cliente</b></h2>
                                    <p className="text-white-50 mb-3">Ingresar Código de Tarjeta</p>
                                    <img
                                        src="https://sistema.kbus.kradac.com/consorcio/tarjeta/situ/img/tarjetas.png"
                                        width={"80"}
                                        height={"85"}
                                    ></img>

                                    <div className="form-outline form-white mt-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        <label className="form-label" ><b>Codigo</b></label>
                                    </div>

                                    <button className="btn btn-outline-light btn-lg px-5" >Iniciar Sesion</button>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logincliente;