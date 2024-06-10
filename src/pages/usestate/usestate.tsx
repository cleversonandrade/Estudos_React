import { useState } from "react";

export default function usestate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cont, setCont] = useState<number>(0);
    let c = cont
    c++

    function add() {
        setCont(c)
    }

    return(
        <div className={'flex flex-col text-center bg-zinc-600  h-1/2'}>
            quantidade: <div>{cont}</div>
            <button onClick={add}>Adicionar</button>
        </div>
    )
}