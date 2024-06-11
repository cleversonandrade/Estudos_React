interface IpropsDisplayState{
    valor: number,
    funcaoAdicionar: any,
    funcaoSubtrair: any
}


export default function DisplayState(props:IpropsDisplayState) {
    return(
        <div className={'flex flex-col p-1 rounded-md bg-zinc-300 justify-center items-center w-80'}>
            <div className={'flex bg-zinc-700 text-green-400 justify-center items-center w-52 mb-4'}>
                {props.valor}
            </div>
            <div className="flex gap-2">
                <button className="btnPadrao" onClick={props.funcaoAdicionar}>Adicionar</button>
                <button className="btnPadrao" onClick={props.funcaoSubtrair}>Subtrair</button>
            </div>
        </div>
    )
}