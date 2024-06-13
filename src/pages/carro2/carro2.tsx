import { useState } from "react";

export default function Carro() {

    const [carro, setCarro] = useState<string>('');
    let c = carro;

    function trocar() {
        if(carro != '') {
            setCarro('Fusca')
        }
    }

    return(
        <div className={'flex p-2 gap-1'}>
            Carro:
            <div>{c}</div>
            <button onClick={(e) => (trocar)}>trocar</button>
        </div>
    )
}