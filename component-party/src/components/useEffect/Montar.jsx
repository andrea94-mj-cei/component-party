import {useEffect, useState} from 'react';

export const Montar = () => {

    const [mostrarHijo, setMostrarHijo] = useState(true);

    return ( 
        <>
        <button onClick={()=> setMostrarHijo(!mostrarHijo)}>Agregar/Quitar Hijo</button>
        <br />
        {mostrarHijo && <MontarHijo/>}
        </>
     );
}
 
export const MontarHijo = () => {

    useEffect(()=>{
        console.log("Aparece el hijo");
        return () => {
            console.log("Desaparece el hijo");
        }
    });

    return ( 
        "Soy tu hijo, no me quites... 😡"
     );
}