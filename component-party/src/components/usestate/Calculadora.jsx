import { useState, useEffect } from "react";

const Calculadora = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState("+");
    const [resultado, setResultado] = useState(0);


    //useEffects:
    useEffect(()=>{
        calcular();
    },[])

    const calcular = () =>{

        const n1=parseFloat(num1);
        const n2=parseFloat(num2);

        switch(operacion){
            case "+" : setResultado(n1+n2); break;
            case "-" : setResultado(n1-n2); break;
            case "*" : setResultado(n1*n2); break;
            case "/" : setResultado(n1/n2); break;
        }
    };

    return ( 
        <>
        <h2>Calculadora</h2>
        <input value={num1} type="number" onChange={(e) => setNum1(e.target.value)} />
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input value={num2} type="number" onChange={(e) => setNum2(e.target.value)} />
        <button onClick={calcular}>=</button>
        <p>El resultado es: {resultado}</p>
        <p>Numero1: {num1}</p>
        <p>Numero2: {num2}</p>
        </>
     );
}
 
export default Calculadora;