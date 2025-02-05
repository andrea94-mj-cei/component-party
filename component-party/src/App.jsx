import AlertBox from './components/AlertBox';
import BlogPost from './components/BlogPost';
import PerfilUsuario from './components/PerfilUsuario';
import ListaTareas from './components/tareas/ListaTareas';
import GaleriaDeImagenes from './components/GaleriaDeImagenes';
import {TarjetaUsuario} from './components/TarjetaUsuario';
import './css/App.css'

//importar componentes (useState)
import Contador from './components/usestate/Contador';
import Interruptor from './components/usestate/Interruptor';
import Interruptor2 from './components/usestate/Interruptor2';
import ListaDeTareas from './components/usestate/ListaDeTareas';
import Formulario from './components/usestate/Formulario';
import GaleriaImagenes from './components/usestate/GaleriaDeImagenes';
import Adivinanza from './components/usestate/Adivinanza';
import ContadorTexto from './components/usestate/ContadorTexto';
import Calculadora from './components/usestate/Calculadora';

//importar componentes (useEffect)
import { Temporizador } from './components/useEffect/Temporizador';


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

    {/* ACTIVIDADES CON USE STATE */}

    {/* //Contador */}
    <Contador />
 
    {/* //Botón encendido/apagado */}
    <Interruptor />
    <br />
    <Interruptor2 />

    {/* Lista de tareas */}
    <ListaDeTareas />

    {/* Formulario */}
    <Formulario/>

    {/* Galería de imágenes */}
    <GaleriaImagenes/>

    {/* Adivinanza */}
    <Adivinanza/>

    {/* Contador de texto */}
    <ContadorTexto/>

    {/* Calculadora */}
    <Calculadora/>



    {/* ACTIVIDADES CON useEffect */}

    {/* Temporizador */}
    <Temporizador/>
    </>

   
  )
}

export default App
