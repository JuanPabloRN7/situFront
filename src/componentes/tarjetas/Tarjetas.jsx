import React from 'react';
import { useState } from 'react';
import { ListarTarjeta } from '../../hooks/ConexionSw';
import swal from 'sweetalert';

const Tarjetas = () => {

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
        const datos =  ListarTarjeta().then((data) => {

            setllamada(true);
            setInfo(data);
        }, (error) => {
            mensaje(error.mensaje);
        });
    }

    return (
        <div className="container" style={{ height: "1460px", width: "2600px" }}>
            <div className="row d-flex justify-content-center pt-4">
                <h1 className="font-weight-bold "> Tarjetas </h1>
                <img className='mx-4'
                    src="https://sistema.kbus.kradac.com/consorcio/tarjeta/situ/img/tarjetas.png"
                    width={"50"}
                    height={"55"}
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
                                <strong> Propietario </strong>
                            </th>
                            <th scope="col">
                                <strong> Saldo </strong>
                            </th>
                            <th scope="col">
                                <strong> Se creo en </strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {info && info.data && info.data.map((element, key) => {
                            return <tr key={key}>
                                <td>{(key) + 1}</td>
                                <td> {element.Propietario}</td>
                                <td> {element.saldo}</td>
                                <td> {element.Se_creo_en}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <dir></dir>
        </div>
    );
};

export default Tarjetas;