import {useState, useEffect } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

export default function useeffect() {
    const [cont, setCont] = useState<number>(0)
    const [auxiliar, setAuxiliar] = useState<number>(0)

    useEffect(() => {
       alert('UseEffect disparado')
       Globais.nome = 'Cleverson'
       Globais.curso = 'React Next Typescript'
       Globais.ano = '2030'
    },[])

    function aux() {
        let a = auxiliar
        a++
        setAuxiliar(a)
    }

    function adicionar() {
        let c = cont
        c++
        setCont(c)
    }

    return(
        <div>
            <Topo />
            <div>
                <p>{`Valor de cont: ${cont}`}</p>
                <p>{`Valor de auxiliar: ${auxiliar}`}</p>
                <button onClick={aux}>Adicionar</button>
            </div>
            <div>
                <div>Nome: {Globais.nome}</div>
                <div>Curso: {Globais.curso}</div>
                <div>Ano:  {Globais.ano}</div>
            </div>
        </div>
    )
}