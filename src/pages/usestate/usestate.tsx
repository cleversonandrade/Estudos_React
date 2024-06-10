import { useState } from "react"

export default function usestate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cont, setCont] = useState<number>(0);

    let c = cont
    c++

    function add() {
        setCont(c)
    }

    return(
        <div>
            usestate
            <div>{cont}</div>
            <button onClick={add}>Button</button>
        </div>
    )
}