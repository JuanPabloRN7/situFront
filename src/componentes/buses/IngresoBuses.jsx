import React from 'react';
import '../../css/Bootstrap.css'
import {Link, Navigate,useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IngresarBus,Buses } from '../../hooks/ConexionSw';

const IngresoBuses = () => {

    const mensaje = (texto) => swal(
        {
          title: "Error",
          text: texto,
          icon: "error",
          button: "Aceptar",
          timer: 2000
        }
      );
      
      const mensajeOk = (texto) => swal(
        {
          title: "Ingresado Correctamente",
          text: texto,
          icon: "success",
          button: "Aceptar",
          timer: 2000
        }
      );

    const { external } = useParams();
    const [info, setInfo] = useState(undefined);
    const [llamada, setllamada] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (!llamada) {
        const datos =  Buses().then((data) => {

            setllamada(true);
            setInfo(data);
        }, (error) => {
            mensaje(error.mensaje);
        });
    }

    const onSubmit = (data) => {
        var datos = { 'matricula': data.matricula, 'anio': data.anio, 'ruta':data.ruta };
        const val = IngresarBus(datos).then((info) => {
            if (info) {
                console.log("---", info.data);
                mensajeOk("Se han ingresado los datos");
            } else {
                mensaje(info.message);
                console.log("NO Se han ingresado los datos"); 
            }
        });
    };

    return (
        <div className="container" style={{ height: "1460px", width: "2600px" }}>
            <div className="row d-flex justify-content-center pt-4">
                <h1 className="font-weight-bold "> INGRESAR BUSES </h1>
                <img className='mx-4'
                    src="https://cdn-icons-png.flaticon.com/128/2554/2554893.png"
                    width={"55"}
                    height={"65"}
                ></img>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex justify-content-center">
                    <div className="mt-4 mx-5">
                        <label > <b>Matricula:</b> </label>
                        <input className="text-center mx-1"
                            placeholder="matricula"
                            aria-describedby="search-addon"
                            style={{ width: "200px", height: "40px" }} type="text" step="any"{...register('matricula', { required: true })} />
                        {errors.matricula && errors.matricula.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere la matricula</div>}
                    </div>
                    <div className="mx-4 mt-4">
                        <label > <b> Año: </b></label>
                        <input className="text-center mx-1"
                            placeholder="Año"
                            aria-describedby="search-addon"
                            style={{ width: "200px", height: "40px" }} type="text" {...register('anio', { required: true })} />
                        {errors.anio && errors.anio.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el Año</div>}
                    </div>

                    <div className="mx-4 mt-4">
                        <label > <b> Ruta: </b></label>
                        <input className="text-center mx-1"
                            placeholder="Ruta"
                            aria-describedby="search-addon"
                            style={{ width: "200px", height: "40px" }} type="text" {...register('ruta', { required: true })} />
                        {errors.ruta && errors.ruta.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere la ruta</div>}
                    </div>

                
                    <div className="mx-5 mt-4">
                        <button type="submit" className="btn btn-dark"> <b>Ingresar Bus</b></button>
                    </div>
                </div>
            </form>

            <div className="container mt-5  ">
                <table className="table table-hover table-dark tableFixHead ">
                    <thead className="border-light">
                        <tr>
                            <th scope="col">
                                <strong> Numero</strong>
                            </th>
                            <th scope="col">
                                <strong> Año </strong>
                            </th>
                            <th scope="col">
                                <strong> Matricula </strong>
                            </th>
                            <th scope="col">
                                <strong> Ruta </strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {info && info.data && info.data.map((element, key) => {
                            return <tr key={key}>
                                <td>{(key) + 1}</td>
                                <td> {element.anio}</td>
                                <td> {element.Matricula}</td>
                                <td> {element.ruta}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <dir></dir>
        </div>
    );
};

export default IngresoBuses;