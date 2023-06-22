import { useState } from "react";

export const Cadastro = (props) => {

    const [item, setItem] = useState();

    return  (
        <div id="cadastro">
            <input placeholder='Informe sua Tarefa' onChange={(e) => setItem(e.target.value)} />
            <button onClick={() => props.handler(item)}>ADD</button>
        </div>
    );
}
