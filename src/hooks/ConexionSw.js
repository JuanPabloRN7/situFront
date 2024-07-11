import { useState, useEffect } from 'react';
import axios from 'axios';
import { ObtenerSession, Session } from '../utilidades/UseSession';


const URL = "http://localhost:8080/api/v1"

export const Opac = (accion = true) => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      if (accion) callApi();
    }, []);
    const callApi = async (nombre) => {
      try {
        const { data, status, statusText } = await axios.get(URL + "/opac");
        setInfo(data);
        console.log(data);
      } catch (error) {
        //console.log(error);
        setError(error);
      }
    };
    return { info, error, execute: callApi };
  };

export const InicioSesion = (data, accion = true) => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      if (accion) callApi(data);
    }, []);
    const callApi = async (datos) => {
      try {
        const { data, status, statusText } = await axios.post(URL + '/login', datos);
        setInfo(data);
        console.log(data);
      } catch (error) {
        setError(error);
      }
  
    }
    return { info, error, execute: callApi };
  };

  export const IngresarSistema = async (data) => {
    return await axios.post(URL + '/login', data)
      .then((response) => {
        console.log(response);
        if (response.data && response.data.token) {
          //PARA INICIO DE SESION COOKIES LOCAL STORE ETC.
          const session = Session(response.data.token);
          console.log("INGRESO AL SISTEMA", session);
        }
        return response.data;
      });
  }

  export const Buses = async (token) => {
    const config = {
      headers: {
        'Authorization': ObtenerSession()
      }
    };
    return await axios.get(URL + '/buses', config)
      .then((response) => {
        console.log(response);
        //PARA INICIO DE SESION COOKIES LOCAL STORE ETC.
        return response.data;
      });
  }
  

  export const IngresarBus = async (data) => {
    const config = {
      headers: {
        'Authorization': ObtenerSession()
      }
    };
    console.log(data);
    return await axios.post(URL + '/bus/guardar', data, config).then((response) => {
      return response.data;
    });
  }

  export const Listarpersonas = async (token) => {
    const config = {
      headers: {
        'Authorization': ObtenerSession()
      }
    };
    return await axios.get(URL + '/personas', config)
      .then((response) => {
        console.log(response);
        //PARA INICIO DE SESION COOKIES LOCAL STORE ETC.
        return response.data;
      });
  }

  export const IngresarPersonas = async (data) => {
    const config = {
      headers: {
        'Authorization': ObtenerSession()
      }
    };
    console.log(data);
    return await axios.post(URL + '/personas/guardar', data, config).then((response) => {
      return response.data;
    });
  }

  export const ListarTarjeta = async (token) => {
    const config = {
      headers: {
        'Authorization': ObtenerSession()
      }
    };
    return await axios.get(URL + '/tarjetas', config)
      .then((response) => {
        console.log(response);
        //PARA INICIO DE SESION COOKIES LOCAL STORE ETC.
        return response.data;
      });
  }

  export const BuscarTarjetas = async (id) => {
    const config = {headers: {
        'access-token': ObtenerSession()
    }};
    return await axios.get(URL+'/tarjeta/buscar/'+id,config).then((response)=>{
        console.log(id);
        return response.data;
    });
}




  
  