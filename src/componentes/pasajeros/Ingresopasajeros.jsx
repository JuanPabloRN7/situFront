import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import swal from 'sweetalert';
import { IngresarPersonas } from '../../hooks/ConexionSw';
import './pasajeros.css';
import { Link, useNavigate } from 'react-router-dom';


const Ingresopasajeros = () => {

    const navegacion = useNavigate();

    const [info, setInfo] = useState(undefined);
    const [llamada, setllamada] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [informacion, setInformacion] = useState('');

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

    const onSubmit = (data) => {
        //var datos = { 'cedula': data.cedula, 'direccion': data.direccion, 'nombre': data.nombre, 'nombreRol': data.nombreRol, 'usuario': data.usuario, 'clave': data.clave
        //,'codigo': data.codigo,'saldo': parseFloat(data.saldo),'montoTotal': parseFloat(data.montoTotal)  };
        const datos = {
            cedula: data.cedula,
            direccion: data.direccion,
            nombre: data.nombre,
            nombreRol: data.nombreRol,
            cuenta: {
                usuario: data.usuario,
                clave: data.clave
            },
            tarjeta: {
                codigo: data.codigo,
                saldo: parseFloat(data.saldo),
                montoTotal: parseFloat(data.montoTotal),
            },
        }
        const val = IngresarPersonas(datos).then((info) => {
            if (info) {
                console.log("---", info);
                mensajeOk("Se han ingresado los datos");
            } else {
                mensaje(info.message);
                console.log("NO Se han ingresado los datos");
            }
        });
    };

    const handleChange = (event) => {
        console.log(informacion);
        const valorInput = event.target.value;
        setValue("clave", event.target.value);
    };

    return (
        <section
            className="todo"

        >
            <div
                className="container py-5 h-100"

            >
                <div className="row d-flex justify-content-center mb-3">
                    {" "}
                    <h1>
                        {" "}
                        <b> TRANSPORTE SITU </b>{" "}
                    </h1>
                    <img className='mx-4'
                        src="https://play-lh.googleusercontent.com/sGDZxxAaYdGyXaeBD16M7cDGJ3GOuU6vrys3T2BNRlIzoVX-Gd_487V9XiG1T1HxMUE=w240-h480-rw"
                        width={"50"}
                        height={"55"}
                        alt=""
                    />
                </div>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div
                                    className="col-lg-6"
                                    style={{ backgroundColor: "#4faee8" }}
                                >
                                    <div className="card-body p-md-5 mx-md-4 ">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row d-flex justify-content-center align-items-center text-center mb-3">
                                                <h2>
                                                    <b> PASAJEROS </b>
                                                </h2>
                                                <img className='mx-4'
                                                    src="https://cdn-icons-png.flaticon.com/128/1042/1042268.png"
                                                    width={"30"}
                                                    height={"35"}
                                                    alt=""
                                                />
                                            </div>

                                            {/* nombres */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("nombre", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nombres Completos"
                                                />
                                                {errors.nombre && errors.nombre.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el nombre</div>}
                                            </div>

                                            {/* direccion */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("direccion", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Direccion"
                                                />
                                                {errors.direccion && errors.direccion.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere la direccion</div>}
                                            </div>

                                            {/* cedula */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("cedula", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Cedula"
                                                />
                                                {errors.cedula && errors.cedula.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere la cedula</div>}
                                            </div>

                                            {/* usuario */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("usuario", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Usuario"
                                                />
                                                {errors.usuario && errors.usuario.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el nombre del usuario</div>}
                                            </div>


                                            {/* codigo */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("codigo", { required: true })}

                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Código de Tarjeta"
                                                    onChange={handleChange}
                                                />
                                                {errors.codigo && errors.codigo.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el Código de Tarjeta</div>}
                                            </div>

                                            {/* clave */}
                                            <div className="form-outline mb-4">
                                                <input

                                                    {...register("clave", { required: true })}
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Clave"
                                                    readOnly

                                                />
                                                {errors.password && errors.password.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere la clave</div>}
                                            </div>

                                            {/* saldo */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    {...register("saldo", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Saldo Inicial"
                                                />
                                                {errors.saldo && errors.saldo.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el saldo</div>}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select
                                                    {...register("nombreRol", {
                                                        required: true,
                                                    })}
                                                    className="form-control"
                                                >
                                                    <option value="Cliente" >Cliente</option>

                                                    <option value="Administrador" disabled>Administrador</option>
                                                </select>
                                                {/* <label className="form-label">Rol</label> */}
                                                {errors.nombreRol?.type === "required" && (
                                                    <p className="text-danger">Campo requerido</p>
                                                )}
                                            </div>

                                            {/* montoTotal */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    style={{ display: "none" }}
                                                    value={0.30}
                                                    {...register("montoTotal", { required: true })}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Pasaje"
                                                />
                                                {errors.montoTotal && errors.montoTotal.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere el monto_total</div>}
                                            </div>


                                            <div className="row d-flex justify-content-center align-items-center text-center mb-3">
                                                {/* boton de guardar persona */}
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <button type="submit" className="btn btn-dark">
                                                        <b>Guardar</b>
                                                    </button>
                                                </div>

                                                {/* boton de ir a pasajeros */}
                                                <div className=" mx-4 d-flex align-items-center justify-content-center pb-4">
                                                    <Link className="btn btn-dark" to="/pasajeros"><b>Pasajeros </b></Link>
                                                </div>
                                            </div>

                                        </form>




                                    </div>
                                </div>

                                <div
                                    className="col-lg-6 d-flex align-items-center gradient-custom-2"
                                    style={{ backgroundColor: "#ffffff" }}
                                >
                                    <div className="container ">
                                        <img
                                            src="https://i.ytimg.com/vi/XoW5Jbv8MmY/maxresdefault.jpg"
                                            alt=""
                                            className="img-fluid form-outline mb-4"

                                            style={{ borderStyle: "solid" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ingresopasajeros;