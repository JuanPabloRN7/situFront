import React from 'react';
import Nanvar from '../nanvar/Nanvar';
import './adminvista.css';


const Admivista = () => {
    return (
        <div className='gradient-admin'>
            <Nanvar></Nanvar>
            <div className='mt-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <h1><b>Administración</b></h1>
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <img
                    src="https://situloja.com/img/bus.png"
                    style={{ width: '50%', height: '100%', objectFit: 'cover' }}

                ></img>
            </div>
        </div>
    );
};

export default Admivista;