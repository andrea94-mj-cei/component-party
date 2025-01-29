const Tarea = ({nombre, completada}) => {



    return ( 
        <>
        
        <p><input type="checkbox" checked={completada}  />{nombre}</p>

        {/* <p>{completada ? 'Completada' : 'No completada'}</p> */}
        </>
     );
}
 
export default Tarea;