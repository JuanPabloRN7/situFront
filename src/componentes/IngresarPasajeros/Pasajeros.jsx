import React from 'react';
import { useState } from 'react';
import { Listarpersonas } from '../../hooks/ConexionSw';
import swal from 'sweetalert';
import './pasajeros.css';

const Pasajeros = () => {

    const [info, setInfo] = useState(undefined);
    const [llamada, setllamada] = useState(false);

    const mensaje = (texto) => swal(
        {
          title: "Error",
          text: texto,
          icon: "error",
          button: "Aceptar",
          timer: 2000
        }
      );

    if (!llamada) {
        const datos =  Listarpersonas().then((data) => {

            setllamada(true);
            setInfo(data);
        }, (error) => {
            mensaje(error.mensaje);
        });
    }

    return (
        <div className="container" style={{ height: "1460px", width: "2600px" }}>
            <div className="row d-flex justify-content-center pt-4">
                <h1 className="font-weight-bold "> PASAJEROS </h1>
                <img className='mx-4'
                    src="https://play-lh.googleusercontent.com/sGDZxxAaYdGyXaeBD16M7cDGJ3GOuU6vrys3T2BNRlIzoVX-Gd_487V9XiG1T1HxMUE=w240-h480-rw"
                    width={"55"}
                    height={"65"}
                ></img>
            </div>

            <div className="container mt-5  ">
                <table className="table-container ">
                    <thead className="border-light">
                        <tr className='table-header'>
                            <th scope="col">
                                <strong> Numero</strong>
                            </th>
                            <th scope="col">
                                <strong> Nombre </strong>
                            </th>
                            <th scope="col">
                                <strong> Cedula </strong>
                            </th>
                            <th scope="col">
                                <strong> Direccion </strong>
                            </th>

                            <th scope="col">
                                <strong> Saldo Tarjeta </strong>
                            </th> 
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {info && info.data && info.data.map((element, key) => {
                            return <tr key={key}>
                                <td>{(key) + 1}</td>
                                <td> {element.nombres}</td>
                                <td> {element.cedula}</td>
                                <td> {element.direccion}</td>
                                <td> {element.Tarjeta_saldo}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <dir></dir>
        </div>
    );
};

export default Pasajeros;