### Ejercicio: Crear un Componente de Carousel de Imágenes en Component Party


![Carousel](./Carousel.png)

Crear un componente de carrusel de imágenes en React que permita navegar entre imágenes, mostrar indicadores de posición y tener una función de reproducción automática que se detenga al pasar el ratón por encima.


#### Paso 1: Crear el Componente Base
1. Crea un nuevo archivo llamado `Carousel.js`.
2. Asegúrate de importar `useState` y `useEffect` desde React, ya que los necesitarás más adelante.
3. Crea la siguiente estructura de componente:
```html
   <div className="carousel" >
        <div className="carousel-container">
        </div>
        <div className="carousel-controls">
        </div>
        <div className="carousel-indicators">
        </div>
    </div>
```

#### Paso 2: Aceptar una Lista de Imágenes como Props
1. Modifica el componente `Carousel` para que acepte una prop llamada `imageList`, que será un array de URLs de imágenes.
2. Utiliza el sitio https://dummyjson.com para crear las imágenes con texto. Ej: "imagen 1", "imagen 2", etc.

#### Paso 3: Mostrar las Imágenes en Pantalla
1. Listar todas las imagenes en el contenedor flex con la siguiente estructura:
```html
    <div className="carousel-slide" key={index}>
        <img src="https:..." alt="imagen 1" />
    </div>
```
2. Utiliza useState para gestionar el índice de la imagen actual a muestra.
3. Renderiza la imagen actual basada en el índice del estado.
4. Asegúrate de que las imágenes se muestren en un contenedor con estilos básicos.

#### Paso 4: Añadir Botones de Navegación
1. Añade dos botones: uno para ir a la imagen anterior y otro para ir a la siguiente.
2. Implementa funciones `goToPrevious` y `goToNext` para actualizar el índice de la imagen actual.
3. Asegúrate de que el carrusel sea circular, es decir, que después de la última imagen vuelva a la primera y viceversa.

#### Paso 5: Añadir Indicadores de Control
1. Añade indicadores de control debajo del carrusel que representen cada imagen.
2. Implementa una función `goToSlide` que permita saltar a una imagen específica al hacer clic en su indicador.

#### Paso 6: Implementar la Función de Reproducción Automática
1. Añade una prop opcional `autoPlay` que active la reproducción automática del carrusel.
2. Utiliza `useEffect` para configurar un intervalo que cambie la imagen cada 2 segundos.
3. Añade eventos `onMouseEnter` y `onMouseLeave` al carrusel para detener la reproducción automática cuando el ratón esté sobre el carrusel y reanudarla cuando se retire.
