import { useState } from "react";

const Formulario = () => {

    //en ves de usar states individuales
    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");

    //podemos crear un único objeto con su estado
    const [formData, setFormData] = useState({
        nombre: "",
        email: ""
    });

    const handleChange = (e) =>{
        // Forma no segura
        // setFormData({
        //     ...formData,
        //     [e.target.name] : e.target.value
        // });

        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        
    }

    //para enviar el formulario
    const handleSubmit = (e) =>{
        e.preventDefault(); // evita que se envíe el formulario

        //deconstruimos formData:
        const {nombre, email} = formData;

        //validamos datos del usuario
        //buscamos los errores en nomnre y correo
        if(nombre.trim() === "" && email.trim() === ""){
            alert("Tienes que introducir todos los datos");
            return;
        }
        
        console.log(formData);
        setFormData({
            nombre: "",
            email: ""
        })
    }

    return ( 
        <>
        <h2>Formulario de registro</h2>
        <form  onSubmit={handleSubmit}>
            <input 
            value={formData.nombre}
            name="nombre"
            onChange={handleChange}
             type="text" 
             placeholder="Nombre" />
            <br />
            <input 
            value={formData.email}
            name="email"
            onChange={handleChange}
             type="text" 
             placeholder="Email" />
             <br />
             <input type="submit" value="Enviar" />
        </form>

        </>
     );
}
 
export default Formulario;