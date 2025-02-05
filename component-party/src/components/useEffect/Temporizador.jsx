import {useState, useEffect} from 'react'

export const Temporizador = () =>{

    const [segundos, setSegundos] = useState(0);

    useEffect (()=>{

        //código que ejecutamos después de renderizar el componente
        const idInterval = setInterval(()=>{
            setSegundos( s => s+1 )
        }, 1000);

        //función de limpieza:
        return () =>{
            clearInterval(idInterval);
        }

    },[]);

    return(
        <>
        <h2>Temporizador</h2>
        <p>Han pasado {segundos} segundos</p>
        </>
    )
}
