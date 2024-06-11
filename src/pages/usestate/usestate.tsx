import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function usestate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cont, setCont] = useState<number>(0);

    
    function adicionar() {
        let c = cont
        c++
        setCont(c)
    }

    function subtrair() {
        let c = cont
        c--
        setCont(c)
    }

    return(
        <div>
            quantidade: 
            <DisplayState valor={cont} funcaoAdicionar={adicionar} funcaoSubtrair={subtrair}></DisplayState>
        </div>
    )
}