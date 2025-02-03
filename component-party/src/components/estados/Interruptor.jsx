import {useState} from 'react';

const Interruptor = () => {

    const [apagado, setApagado] = useState(true);


    return ( 
        <>
        <h3>Interruptor</h3>
        <div>
            <p>Estado: {apagado ? 'Apagado' : 'Encendido'}</p>
            <button className={apagado ? "Button-apagado" : "Button-encendido"}
                onClick={() => setApagado(!apagado)}>
                {apagado ? 'Encender' : 'Apagar'}
            </button>
        </div>
        </>
     );
}
 
export default Interruptor;

//Un botón que haga de interruptor entre Encendido y Apagado. y también que cambie de color