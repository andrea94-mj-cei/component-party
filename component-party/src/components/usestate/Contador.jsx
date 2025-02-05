import {useState} from 'react';

const Contador = () => {
        //[variable, setVariable] = usestate(valorinicial);
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('Andrea');

    const handleClick = () => {
        setContador(contador + 1);
        const newNombre = (nombre=="Margarita") ? 'Andrea' : 'Margarita';   
        setNombre(newNombre);
    }

    return ( 
        <>
            <h3>Contador</h3>
    <div>
      <p>Contador: {contador}</p>
      <button onClick={handleClick}>
        Aumentar {nombre}
      </button>
    </div>
        </>
     );
}
 
export default Contador;