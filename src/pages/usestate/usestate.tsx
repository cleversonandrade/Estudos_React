import { useState } from "react";
import DisplayState from "@/components/DisplayState";

export default function usestate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cont, setCont] = useState<number>(0);

    return(
        <div>
            Adicione ao seu carrinho: 
            <DisplayState valor={cont} funcaoValor={setCont}></DisplayState>
        </div>
    )
}