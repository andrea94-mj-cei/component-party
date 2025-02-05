import { useState } from "react";

const ContadorTexto = () => {

    // const [palabras, setPalabras] = useState([]);
    // const [caracteres, setCaracteres] = useState([]);

    const [frase, setFrase] = useState("");

    const cantWords = frase.split(" ").filter(p => p !="").length;
    

    const handleChange = (e) =>{
        setFrase(e.target.value)
    }

    return ( 
        <>
        <h2>Editor de texto</h2>
        <textarea
         value={frase}
         onChange={handleChange}
        cols="30" 
        rows="10"></textarea>
        <p>Tu texto tiene: {frase.length} caracteres</p>
        <p>Tu texto tiene: {cantWords} palabras</p>
        </>
     );
}
 
export default ContadorTexto;