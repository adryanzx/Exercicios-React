import { useState } from "react";

function FormularioMult(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);
    const [valor2, setValor2] = useState(0);
    const mult = () => {

        setResultado(Number(valor1)*Number(valor2));
        setValor("");
        setValor2("");

    }

    return(<div>
        <h3>multiplicar valores</h3>
        <input type="number" placeholder="informe o valor 1:" value={valor1} onChange={(e => setValor(e.target.value))}/>
        <input type="number" placeholder="informe o valor 2:" value={valor2} onChange={(e => setValor2(e.target.value))}/>
        <button onClick={mult}>Calcular</button>
        <p>o valor da Multiplicação é: {resultado}</p>
    </div>);
}

export default FormularioMult;