import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


function App() {
    // citas en localstorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    // Arreglo de citas
    const [citas, setCitas] = useState(citasIniciales ? citasIniciales : []);

    // useEffect
    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas));
    }, [citas]);

    // Función que tome las citas actuales y agregue la nueva
    const crearCita = (cita) => {
        setCitas([...citas, cita]);
    };

    // eliminar cita por id
    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter((cita) => cita.id !== id);
        setCitas(nuevasCitas);
    };

    // Mensaje Condicional
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>

            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className='one-half column'>
                        <h2>{titulo}</h2>
                        {citas.map((cita) => (
                            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
