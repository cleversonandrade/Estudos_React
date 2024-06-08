
const Card = (props:any) => {
    return(
        <div className="flex flex-col border border-red-700 rounded-md p-1">
            <div>{props.produto}</div>
            <div>{props.valor}</div>
        </div>
    )
}

export default Card;