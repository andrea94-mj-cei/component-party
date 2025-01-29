# component-party
 actividad

# Ejercicios React-Component-Party

## Ejercicio 1: Setup + Tarjeta de Usuario

- Crear un proyecto nuevo en Vite con React que se llame `react-component-party`
- Crear un componente `TarjetaUsuario` que reciba props para mostrar información de un usuario (nombre, edad, ocupación).
- Crea los estilos para este componente en un archivo CSS `css/App.css`
- Importa el componente en nuestro archivo `App.js` y cargue 3 tarjetas con distintos valores de usuarios.
- Que ocurre si un usuario no posee un dato específico? si no ingresan una ocupación mostrar en pantalla " -Sin ocupación- ", si no ingresan una edad, NO mostrar ese campo.

## Ejercicio 2: Lista de Tareas

- Crear un componente `tareas/ListaTareas.jsx` que reciba un array de tareas para este verano como props.
- Craar un segundo componente `tareas/Tarea.jsx` que reciba props para mostrar cada una de las tareas.
- Incluir nuestro componente ListaTareas en App.js y mostrarlas en pantallas.

```js
// Lista de tareas antes de invierno
const tareas = [
{ id: 1, nombre: 'Estudiar React', completada: true },
{ id: 2, nombre: 'Leer un libro', completada: false },
{ id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
{ id: 4, nombre: 'Aprender a cocinar', completada: true },
{ id: 5, nombre: 'Ver series', completada: false },
{ id: 6, nombre: 'ir un día a la nieve', completada: false}
];

```

## Ejercicio 3: El Barto Perfil

- Crear un componenten llamado `PerfilUsuario` que arme una tarjeta con los siguientes datos de perfil.
- Atención, este objeto posee otro objeto anidado dentro, deconstruir como corresponde.

```js
// PerfilUsuario (Objeto Anidado)
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
```

## Ejercicio 4: Galería de imagenes

- Crear un componente galería de imagenes con los datos dados a continuación.
- Puede que no siempre tengamos un `key` como un id para nuestro map(), por lo podemos ustilizar (como última instancia) el atributo `index` que nos ofrece map() en su segundo parametro, como se indica a continuación:
`listaImagenes.map( (item, index) => { ..... })`

```js
// GaleriaImagenes (Array de Objetos)
// https://rickandmortyapi.com/
const imageList = [
{ src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg&#39;, alt: 'Rick Sanchez' },
{ src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg&#39;, alt: 'Morty Smith' },
{ src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg&#39;, alt: 'Summer Smith' },
];
```

## Ejercicio 5: Blog Post - Investigación de prop children

- Crear un componente llamado `BlogPost` que reciba `título`, `fecha` y `autor` como props, pero que utilice el contenido del Post como children.
- Puedes buscar online que es el prop `children` de React, o ver este link con una explicación muy simplificada [wikiReact](https://www.reactjs.wiki/que-es-y-para-que-sirve-la-prop-children-en-react)

El App.jsx debe tener este formato:
```js
{/* Componente con children */}
<BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01" >
<p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
</BlogPost>
```

# EJERCICIOS EXTRA


### 1. **Componente de Header con navegación**
   - **Objetivo:** Crear un componente `Header` que contenga un logo a la izquierda y un conjunto de enlaces de navegación a la derecha.
   - **Requisitos:**
     - El `Header` debe aceptar el logo como una prop.
     - Los enlaces de navegación deben estar como una lista de elementos.
     - Implementar la navegación de manera que cada enlace pueda tener un comportamiento de clic que imprima en consola el nombre de la sección (simulando navegación).

### 2. **Galería de imágenes a partir de un JSON**
   - **Objetivo:** Crear un componente `Gallery` que reciba un JSON con información sobre imágenes (como URL y título) y las muestre en una cuadrícula.
   - **Requisitos:**
     - El JSON puede tener una estructura como esta con sus fotos locales:
       ```json
       [
         { "src": "image1.jpg", "alt": "Image 1", "title": "Image 1" },
         { "src": "image2.jpg", "alt": "Image 2", "title": "Image 2" }
       ]
       ```

       o pueden usar servicios online como el de [Picsum](https://picsum.photos/).
       ejemplo de Json:
       
       `https://picsum.photos/v2/list`

       otr:

       `https://dummyjson.com/docs/image`

     - Usar `.map()` para renderizar cada imagen en un componente hijo.
     - El título/autor de la imagen debe aparecer debajo de la imagen.

### 3. **Componente de tarjeta de usuario**
   - **Objetivo:** Crear un componente `UserCard` que muestre la información de un usuario como nombre, foto de perfil, y biografía.
   - **Requisitos:**
     - El componente debe recibir las props necesarias como el `id`, `nombre`, `avatar` y `bio`. 
     - Mostrar estos datos dentro de una tarjeta estilizada.
     - Usar los elementos HTML adecuados para las imágenes, títulos y párrafos.
     - El componente debe tener una variable `const userId = 1;`. Si el id que se recibe como prop es igual a userId, entonces la tarjeta debe mostrar los campos de nombre, avatar y bio como un formulario editable.

### 4. **Footer con enlaces a la web y RRSS**
   - **Objetivo:** Crear un componente `Footer` que contenga enlaces a la página web y a las redes sociales de la empresa o persona.
   - **Requisitos:**
     - Usar una lista de elementos `<ul>` para los enlaces.
     - Los enlaces deben ser pasados como props para que se puedan reutilizar, y debe incluir los siguientes enlaces a redes sociales (FB, X, IG, Threads, Linkedin).
     - Crear un componente extra pequeño de sitemap en el footer con enlaces a las posibles secciones de la web (ej: ver footer de apple.com)

### 5. **Componente de tarjeta de producto**
   - **Objetivo:** Crear un componente `ProductCard` que muestre la información de un producto: imagen, nombre, precio y una breve descripción.
   - **Requisitos:**
     - Pasar los datos del producto (como `name`, `price`, `imageUrl` y `description`) a través de props.
     - La tarjeta debe tener un diseño que incluya una imagen del producto y un botón "Añadir al carrito" que solo imprima en consola el nombre del producto cuando se haga clic.

### 6. **Lista de contactos**
   - **Objetivo:** Crear un componente `ContactList` que reciba un array de objetos con los detalles de los contactos (nombre, foto, email, teléfono).
   - **Requisitos:**
     - Cada contacto debe mostrarse en un elemento `<li>`.
     - Implementar un componente `Contact` para representar cada contacto individualmente.
     - El componente `Contact` debe recibir la información de cada contacto como props y mostrarla.

### 7. **Tabla de usuarios**
   - **Objetivo:** Crear un componente `UserTable` que reciba un array de objetos con los datos de los usuarios (nombre, edad, ciudad) y los muestre en una tabla.
   - **Requisitos:**
     - Usar las etiquetas `<table>`, `<tr>`, `<td>` para estructurar la tabla.
     - La información debe ser pasada como una lista de objetos y luego procesada dentro del componente para renderizar cada fila de la tabla.

### 8. **Componente de Testimonios**
   - **Objetivo:** Crear un componente `Testimonial` que reciba la foto, nombre y testimonio de una persona.
   - **Requisitos:**
     - Mostrar la foto, el nombre y el testimonio en un formato atractivo.
     - El componente debe ser reutilizable, por lo que se debe crear un contenedor principal (por ejemplo, `TestimonialList`) que reciba una lista de testimonios y renderice cada uno usando el componente `Testimonial`.

### 9. **Componente de menú desplegable**
   - **Objetivo:** Crear un componente `DropdownMenu` que al hacer clic en un botón, despliegue una lista de opciones.
   - **Requisitos:**
     - El componente debe recibir las opciones del menú como una lista de strings.
     - El botón debe cambiar su texto cuando el menú esté visible (por ejemplo, "Mostrar opciones" o "Ocultar opciones").
     - El componente debe recibir una prop `isOpen` que le indicará si se debe mostrar el menú de navegación o no.

### 10. **Componente de alerta (alert box)**
   - **Objetivo:** Crear un componente `AlertBox` que muestre un mensaje de alerta con un ícono (como un signo de exclamación) y un texto.
   - **Requisitos:**
     - El componente debe recibir el tipo de alerta (por ejemplo, "error", "success", "warning") como prop para cambiar el color del borde y el ícono.
     - Mostrar el mensaje dentro de la caja de alerta, con un estilo distinto según el tipo de alerta.