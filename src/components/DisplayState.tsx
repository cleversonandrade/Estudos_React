interface IpropsDisplayState{
    valor: number,

}

export default function DisplayState(props:IpropsDisplayState) {
    return(
        <div>
            {props.valor}
        </div>
    )
}