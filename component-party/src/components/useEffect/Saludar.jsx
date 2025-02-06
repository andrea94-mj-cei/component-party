import { useEffect, useState } from "react";

const Saludar = () => {

    const [cont, setCont] = useState(0);
    const [clicks, setClicks] = useState(0);

    // useEffect ( ()=>{
    //     console.log("Se carga por primera vez");
    // }, []);

    // useEffect ( ()=>{
    //     console.log("Se ejecuta con cada render");
    // });

    useEffect ( ()=>{
        setClicks(clicks + 1);
        console.log("Se ejecuta cada vez que cambia cont");
    }, [cont]);
   

    return ( 
        <>
        <h2>Mensaje en consola</h2><h3>"Hola Mundo"</h3>
        <p>Valor: {cont}</p>
        <p>Clicks: {clicks}</p>
        <button onClick={()=>setCont(cont-1)}>
            Decrementar 
        </button>
        <button onClick={()=>setCont(cont+1)}>
            Incrementar 
        </button>
        </>
     );
}
 
export default Saludar;