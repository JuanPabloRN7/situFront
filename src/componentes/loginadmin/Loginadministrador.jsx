import React from 'react';
import './loginadmin.css';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { IngresarSistema } from '../../hooks/ConexionSw';
import { Session } from '../../utilidades/UseSession';

const Loginadministrador = () => {
    const navegacion = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
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
        var datos = { 'usuario': data.usuario, 'clave': data.clave };
        IngresarSistema(datos).then((info) => {
            if (info && info.data.token) {
                console.log(info.data.token);
                //Session(info.data.token);
                localStorage.setItem('token',info.data.token);
                mensajeOk("Bienvenido") 
                navegacion('/admin');
            } else {
                mensaje(info.msg);
            }
        });
    };

    return (
        <section className=" vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="container col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderradius: "1rem" }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase"><b>Administrador</b></h2>
                                        <p className="text-white-50 mb-3">Ingresar Usuario y Contraseña</p>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/128/1042/1042266.png"
                                            width={"50"}
                                            height={"55"}
                                        ></img>

                                        <div className="form-outline form-white mt-4">
                                            <input type="text" className="form-control form-control-lg" {...register('usuario', { required: true })}
                                                placeholder='Usuario' />
                                            {errors.usuario && errors.usuario.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere su usuario</div>}
                                            <label className="form-label" >Usuario</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" {...register('clave', { required: true })}
                                                placeholder='Clave' />
                                            {errors.clave && errors.clave.type === 'required' && <div className='alert alert-danger fade show' role='alert'>Se requiere su clave</div>}
                                            <label className="form-label" >Contraseña</label>
                                        </div>

                                        <button type="submit" className="btn btn-outline-light btn-lg px-5">
                                            <b>Iniciar Sesion</b>
                                             <b style={{ fontSize: "x-large" }}> </b>
                                        </button>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loginadministrador;