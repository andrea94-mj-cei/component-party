import ListaTareas from './components/tareas/ListaTareas'
import {TarjetaUsuario} from './components/TarjetaUsuario'
import './css/App.css'

function App() {

  const tareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Leer un libro', completada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
    { id: 4, nombre: 'Aprender a cocinar', completada: true },
    { id: 5, nombre: 'Ver series', completada: false },
    { id: 6, nombre: 'ir un día a la nieve', completada: false}
    ];

  return (
    <>
    <h2>Actividad 1: Tarjeta de Usuario</h2>
    <TarjetaUsuario nombre="Andrea" edad="30" ocupacion="estudiar"/>
    <TarjetaUsuario nombre="Margarita" edad="23"/>
    <TarjetaUsuario nombre="David" ocupacion="trabajar"/>

    <h2>Actividad 2: Lista de tareas</h2>
    <ListaTareas tareas={tareas} />
    </>
  )
}

export default App
