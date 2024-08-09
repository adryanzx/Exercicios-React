import { useState } from "react";

function FormularioDiv() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [erro, setErro] = useState("");

    const div = () => {
        if (Number(valor2) === 0) {
            setErro("Não é possível dividir por zero.");
            setResultado(0);
        } else {
            setErro(""); 
            setResultado(Number(valor1) / Number(valor2));
        }
        setValor1("");
        setValor2("");
    };

    return (
        <div>
            <h3>Dividir valores</h3>
            <input
                type="number"
                placeholder="Informe o valor 1:"value={valor1}
                onChange={(e) => setValor1(e.target.value)}
            />
            <input
                type="number"placeholder="Informe o valor 2:"
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
            />
            <button onClick={div}>Calcular</button>
            
            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            {resultado !== 0 && !erro && <p>O resultado da divisão é: {resultado}</p>}
        </div>
    );
}

export default FormularioDiv;
