export const TarjetaUsuario = ({nombre, edad, ocupacion}) => {
    

    return ( 
        <>
        <div className="Tarjeta">
        <p>Mi nombre es {nombre}</p>
        
        {edad && <p>Mi edad es: {edad}</p>}
        
        <p>Me dedico a {ocupacion ? ocupacion : "nada"}</p>
        </div>
        </>
    );
}
