import {useState, useEffect} from 'react';

const TiempoDeVida = () => {

    const [seg, setSeg] = useState(0);

    useEffect (()=>{
        const idInterval = setInterval(()=>{
            setSeg( s => s+1 ) //prevState
        }, 1000);

        return () =>{
            clearInterval(idInterval);
        }
    },[])
    

    return ( 
        <>
        <h2>Tiempo de vida de mi componente</h2>
        <p>Mi componente se ha creado hace {seg} segundos </p>
        </>
     );
}
 
export default TiempoDeVida;