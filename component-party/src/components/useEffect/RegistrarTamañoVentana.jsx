import {useEffect} from 'react';

const RegistrarTamañoVentana = () => {

    useEffect(()=>{
        const handleResize = () => {
            console.log(`El ancho es: ${window.innerWidth}px / El alto es: ${window.innerHeight}px`);
        }

        //Registramos el evento resize(para cambiar de tamaño)
        window.addEventListener('resize', handleResize);

        //Llamamos a la función para que se ejecute al cargar la página
        handleResize();

        //Limpiamos el evento
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    return ( 
        <>
        <h3>Mira el ancho y alto de la ventana en la consola 🚀</h3>
        </>
     );
}
 
export default RegistrarTamañoVentana;