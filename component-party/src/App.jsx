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
import Saludar from './components/useEffect/Saludar';
import TiempoDeVida from './components/useEffect/TiempoDeVida';
import TraerPost from './components/useEffect/TraerPost';
import RegistrarTamañoVentana from './components/useEffect/RegistrarTamañoVentana';
import { Montar } from './components/useEffect/Montar';

//Carrousel
import { Carrousel } from './components/carrousel/Carrousel';

// Menús de navegación
import { MenuHorizontal } from '@/components/menus-navegacion/MenuHorizontal';
import { MenuVertical } from '@/components/menus-navegacion/MenuVertical';
import { MenuCategorias } from './components/menus-navegacion/MenuCategorias';
import { MenuTomi } from './components/menu-tomi/MenuTomi';



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

    //Carrousel
    const imageCarrousel = [
      {src: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+1"},
      {src: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+2"},
      {src: "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+3"},
      
  ]

    //MENUS DE NAVEGACION
    const menuItems = [
      { label: "Home", url: "/"},
      { label: "Configuración", url: "/config"},
      { label: "Ayuda", url: "/support"}

    ]

    //fontawesome (librería para iconos) https://fontawesome.com/
    //para poder usarlo hay que instalar la librería (bucarlo en cdn font-awesome) y pegar el link en el html

    const menuCategorias = [
      {
        name: "Home",
        icon: "fa-tachometer-alt",
        items: [
          {label: "Dashboard", url: "./dashboard"},
          {label: "Reportes", url: "./reports"},
        ]
      },
      {
        name: "Configuracion",
        icon: "fa-cog",
        items: [
          {label: "Perfil", url: "./profile"},
          {label: "Tu cuenta", url: "./account"},
        ]
      },
      {
        name: "Ayuda",
        icon: "fa-question-circle",
        items: [
          {label: "FAQ", url: "./faq"},
          {label: "Soporte", url: "./support"},
        ]
      },
      
    ]


  function App() {
        
  return (
    <>
    {/* <h2>Actividad 1: Tarjeta de Usuario</h2>
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
    {/* <Contador /> */}
 
    {/* //Botón encendido/apagado */}
    {/* <Interruptor /> */}
    <br />
    {/* <Interruptor2 /> */}

    {/* Lista de tareas */}
    {/* <ListaDeTareas /> */}

    {/* Formulario */}
    {/* <Formulario/> */}

    {/* Galería de imágenes */}
    {/* <GaleriaImagenes/> */}

    {/* Adivinanza */}
    {/* <Adivinanza/> */}

    {/* Contador de texto */}
    {/* <ContadorTexto/> */}

    {/* Calculadora */}
    {/* <Calculadora/> */}



    {/* ACTIVIDADES CON useEffect */}

    {/* Temporizador */}
    {/* <Temporizador/> */}

    {/* Mensaje en consola */}
    {/* <Saludar/> */}

    {/* Tiempo de vida */}
    {/* <TiempoDeVida/> */}

    {/* Traer Post de una API */}
    {/* <TraerPost/> */}

    {/* Tamaño de ventana */}
    {/* <RegistrarTamañoVentana/> */}

    {/* Componente Padre e Hijo */}
    {/* <Montar/> */}

    {/* ACTIVIDAD CARROUSEL */}
    {/* <Carrousel imgList={imageCarrousel}/>
    <Carrousel imgList={imageCarrousel} autoPlay/> */} 

    {/* MENUS DE NAVEGACIÓN */}
    {/* <MenuHorizontal items={menuItems}/> */}

    {/* <MenuVertical items={menuItems}/> */}
    
    {/* <MenuCategorias items={menuCategorias}/> */}
    {/* <i className='fas fa-cog'></i> */}
    {/* <i className='fas fa-tachometer-alt'></i>
    <i className='fas fa-question-circle'></i> */}

    {/* MENU TOMI */}
    <MenuTomi itemsCategorias = {menuCategorias}/>

    </>

   
  )
}

export default App
