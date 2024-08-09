import { useState } from "react";

function FormularioFarenheit(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);
    const converter = () => {

        setResultado((Number(valor1)-32)*5/9);
        setValor("");

    }

    return(<div>
        <h3>converter farenheit p celsius</h3>
        <input type="number" placeholder="informe o valor 1:" value={valor1} onChange={(e => setValor(e.target.value))}/>
        <button onClick={converter}>Calcular</button>
        <p>o resultado da conversao é: {resultado}</p>
    </div>);
}

export default FormularioFarenheit;