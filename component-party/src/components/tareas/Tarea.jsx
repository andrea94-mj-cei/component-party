const Tarea = ({nombre, completada}) => {



    return ( 
        <>
        <p>{nombre}</p>
        <p>{completada ? 'Completada' : 'No completada'}</p>
        </>
     );
}
 
export default Tarea;