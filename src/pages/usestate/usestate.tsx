import { useState } from "react";
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";

export default function usestate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cont, setCont] = useState<number>(0);

    return(
        <div>
            <Topo />
            Adicione ao seu carrinho: 
            <DisplayState valor={cont} funcaoValor={setCont}></DisplayState>
        </div>
    )
}