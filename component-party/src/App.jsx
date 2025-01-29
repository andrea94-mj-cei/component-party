import AlertBox from './components/AlertBox';
import BlogPost from './components/BlogPost';
import GaleriaDeImagenes from './components/GaleriaDeImagenes';
import PerfilUsuario from './components/PerfilUsuario';
import ListaTareas from './components/tareas/ListaTareas'
import {TarjetaUsuario} from './components/TarjetaUsuario'
import './css/App.css'

  //Actividad 2
  const tareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Leer un libro', completada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
    { id: 4, nombre: 'Aprender a cocinar', completada: true },
    { id: 5, nombre: 'Ver series', completada: false },
    { id: 6, nombre: 'ir un día a la nieve', completada: false}
    ];

    //Actividad 3
    const userData = {

    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    direccion: {
    calle: 'Calle Falsa 123',
    ciudad: 'Springfield',
    codigoPostal: '12345'
    }
    };

    //Actividad 4
    const imageList = [
      { src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", alt: "Rick Sanchez" },
      { src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", alt: "Morty Smith" },
      { src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", alt: "Summer Smith" }
      ];

      const {status, children} = AlertBox;


  function App() {

  return (
    <>
    <h2>Actividad 1: Tarjeta de Usuario</h2>
    <TarjetaUsuario nombre="Andrea" edad="30" ocupacion="estudiar"/>
    <TarjetaUsuario nombre="Margarita" edad="23"/>
    <TarjetaUsuario nombre="David" ocupacion="trabajar"/>

    <h2>Actividad 2: Lista de tareas</h2>
    <ListaTareas tareas={tareas} />

    <h2>Actividad 3: El Barto Perfil</h2>
    <PerfilUsuario userData={userData} />

    <h3>Actividad 4: Galería de Imagenes</h3>
    <GaleriaDeImagenes imageList={imageList} />
    
    <h3>Actividad 5: BlogPost</h3>
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01" >
    <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam
     reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam
    repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>

    <h3>Actividad: AlertBox</h3>
    <AlertBox status="error">¡Tienes un error!</AlertBox>
    <AlertBox status="warning">¡Peligro!</AlertBox>
    <AlertBox status="success">¡Has destrozado tu código!</AlertBox>

    </>

   
  )
}

export default App
