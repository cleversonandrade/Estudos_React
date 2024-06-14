/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect } from "react";

import Topo from "@/components/Topo";

export default function useeffect() {
    const [cont, setCont] = useState<number>(0)
    const [auxiliar, setAuxiliar] = useState<number>(0)

    useEffect(() => {
       alert('UseEffect disparado')
    },[])

    function add() {
        let a = auxiliar
        a++
        setAuxiliar(a)
    }

    return(
        <div>
            <Topo />
            <div>
                <p>{`Valor de cont: ${cont}`}</p>
                <p>{`Valor de auxiliar: ${auxiliar}`}</p>
                <button onClick={add}>Adicionar 1</button>
            </div>
        </div>
    )
}