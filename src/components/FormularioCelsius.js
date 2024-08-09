import { useState } from "react";

function FormularioCelsius(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);
    const converter = () => {

        setResultado(Number(valor1)*9 / 5 + 32);
        setValor("");

    }
    return(<div>
        <h3>converter</h3>
        <input type="number" placeholder="informe o valor 1:" value={valor1} onChange={(e => setValor(e.target.value))}/>
        <button onClick={converter}>Calcular</button>
        <p>o resultado é: {resultado}</p>
    </div>);
}

export default FormularioCelsius;