import { useState } from "react";
function Contador(){

    const [cont, setCont] = useState(0);

    const clicar = () => {
        setCont(cont+1);
    }

    return(
        <div>
            <p>o botao foi clicado {cont} vezes</p>
            <button onClick={clicar}>
                clique aqui!!!!
            </button>
        </div>
    );
}

export default Contador;