import {useState} from 'react';

const ListaDeTareas = () => {

    const [tarea, setTarea] = useState("");

    const [listaTareas, setListaTareas] = useState([""]);

    const handleAgregarTarea = () => {
        setListaTareas([...listaTareas, tarea]);
    }

    return ( 
        <>
        <h2>Agrega una tarea:</h2>
        <input
        value={tarea}
        onChange={(e) => {setTarea(e.target.value)}}
        type="text"
        placeholder="Ingrese una tarea"
        />
        <br />
        <p>La tarea es: {tarea}</p>
        <button onClick={() => handleAgregarTarea("")}>Agregar tarea</button>
        {
            listaTareas.map((t, i)=>(
                <li key={i}>{t}</li>
            ))
        }
        </>
     );
}
 
export default ListaDeTareas;

//Crear una lista de tareas, utlizando un input para agregar tareas y un botón para agregarlas a la lista.