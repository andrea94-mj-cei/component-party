import { useState } from "react";

const GaleriaImagenes = () => {

    const listaImagenes = [
        'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+1',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+2',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+3',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+4'
    ];

    const [indice, setIndice] = useState(0);

    
    const handleSiguiente = () => {
        //CONDICIONAL:
        // if(indice === listaImagenes.length -1 ){
        //     setIndice(0);
        // }else{
        //     setIndice(indice+1);
        // }

        // TERNARIO:
        const sigIndice = (indice===0) ? listaImagenes.length -1 : indice -1;
        setIndice(sigIndice);
        
    }

    

    const handleAnterior = () => {
        // CONDICIONAL:
        // if(indice === 0 ){
        //     setIndice(listaImagenes.length -1);
        // }else{
        //     setIndice(indice-1);
        // }

        // TERNARIO:
        const antIndice = (indice===listaImagenes.length-1) ? 0 : indice+1;
        setIndice(antIndice);
    }

    return ( 
        <>
        <h2>Galería de Imagenes</h2>
        <button onClick={handleAnterior}>Anterior</button>
        <img src={listaImagenes[indice]} alt="imagen" />
        <button onClick={handleSiguiente}>Siguiente</button>
        </>
     );
}
 
export default GaleriaImagenes;