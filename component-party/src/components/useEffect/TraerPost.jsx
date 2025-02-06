import {useState, useEffect} from 'react';

const TraerPost = () => {

    //traer datos de "https://jsonplaceholder.typicode.com/posts/1"

    const [post, setPost] = useState(null);

    
        const traerDatos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const jsonData = await response.json();
            setPost(jsonData);
        }
      


    useEffect(()=>{
        // //CON PROMESAS
        // fetch("https://jsonplaceholder.typicode.com/posts/1")
        // //conversit String de JSON a Objeto de JS
        // .then(response => response.json())
        // //guardar ese objeto de JS en "post"
        // .then(jsonData => setPost(jsonData));

        //CON ASYNC/AWAIT
        traerDatos();


    });

    return ( 
        <>
        <h2>Traer Post</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        "No se encontraron datos"
      )}
    </>

     );
}
 
export default TraerPost;