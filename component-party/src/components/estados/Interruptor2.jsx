import {useState} from 'react';

const Interruptor2 = () => {

    //hook para el estado
    const [isOn, setIsOn] = useState(false);

    //variable para el texto del botón
    const isEncendida = isOn ? 'Apagar' : 'Encender';

    //Función para cambiar el estado
    const handleClick = () => {
        setIsOn(!isOn);}

    //Estilos para el botón
    const darkStyle = {backgroundColor: 'yellow',color: "black"}

    const lightStyle = {backgroundColor: 'black',color: "yellow"}

    const buttonStyle = isOn ? darkStyle : lightStyle;

    
    return ( 
        <>
        <button
            style={buttonStyle}
            onClick={handleClick}>
            {isEncendida} la luz
        </button>
        </>
     );
}
 
export default Interruptor2;