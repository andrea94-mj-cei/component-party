import Tarea from "./Tarea";

const ListaTareas = ({tareas}) => {
    return ( 
        <>
        {tareas.map((tarea)=>(
            <Tarea key={tarea.id} {...tarea}/>
        ))}
        </>
     )
     
}
 
export default ListaTareas;