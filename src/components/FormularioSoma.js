import { useState } from "react";

function FormularioSoma(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);
    const [valor2, setValor2] = useState(0);
    const somar = () => {

        setResultado(Number(valor1)+ Number(valor2));
        setValor("");
        setValor2("");

    }

    return(<div>
        <h3>somar valores</h3>
        <input type="number" placeholder="informe o valor 1:" value={valor1} onChange={(e => setValor(e.target.value))}/>
        <input type="number" placeholder="informe o valor 2:" value={valor2} onChange={(e => setValor2(e.target.value))}/>
        <button onClick={somar}>Calcular</button>
        <p>o valor da soma é: {resultado}</p>
    </div>);
}

export default FormularioSoma;