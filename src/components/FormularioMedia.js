import { useState } from "react";

function FormularioMedia(){
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [valor3, setValor3] = useState(0);
    const media = () => {

        setResultado((Number(valor1)+Number(valor2)+Number(valor3)) / 3);
        setValor("");
        setValor2("");
        setValor3("");

    }

    return(<div>
        <h3>calcular media dos valores</h3>
        <input type="number" placeholder="informe o valor 1:" value={valor1} onChange={(e => setValor(e.target.value))}/>
        <input type="number" placeholder="informe o valor 2:" value={valor2} onChange={(e => setValor2(e.target.value))}/>
        <input type="number" placeholder="informe o valor 3:" value={valor3} onChange={(e => setValor3(e.target.value))}/>
        <button onClick={media}>Calcular</button>
        <p>o valor da media é: {resultado}</p>
    </div>);
}

export default FormularioMedia;