import { useState } from "react";

export default function Carro() {

    const [carro, setCarro] = useState<string>('Corsa');
    let c = carro;

    function trocar() {
        setCarro('Fusca')
    }

    return(
        <div className={'flex p-2 gap-1'}>
            Carro:
            <div>{c}</div>
            <button onClick={trocar}>trocar</button>
        </div>
    )
}
