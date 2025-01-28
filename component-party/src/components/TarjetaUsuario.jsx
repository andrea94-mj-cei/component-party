export const TarjetaUsuario = ({nombre, edad, ocupacion}) => {
    
    const edadError = true;

    return ( 
        <>
        <div className="Tarjeta">
        <p>Mi nombre es {nombre}</p>
        
        <p>Tengo {edad} años</p>
        
        <p>Me dedico a {ocupacion}</p>
        </div>
        </>
     );
}
