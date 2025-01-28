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
img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp&quot;,
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
const iamgeList = [
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