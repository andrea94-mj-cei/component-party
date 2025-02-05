import {useState} from 'react';

const ListaDeTareas = () => {

    const [tarea, setTarea] = useState("");

    const [listaTareas, setListaTareas] = useState([""]);

    const handleAgregarTarea = () => {

        //versión poco segura (puede que no funcione correctamente)
        // setListaTareas(prevState)([...prevState, tarea]);

        //si mi estado depende del estado previo, utilizamos una función de callback
        setListaTareas((prevState) => [...prevState, tarea]);

        //como no depende del estado anterior, podemos actualizarlo directamente
        setTarea("");
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
        <ul>
        <button onClick={() => handleAgregarTarea("")}>Agregar tarea</button>
        {
            listaTareas.map((t, i)=>(
                <li key={i}>{t}</li>
            ))
        }
        </ul>
        </>
     );
}
 
export default ListaDeTareas;

//Crear una lista de tareas, utlizando un input para agregar tareas y un botón para agregarlas a la lista.