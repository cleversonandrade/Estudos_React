interface CardPros {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any
}

const Card = (props:CardPros) => {
    return(
        <div className="flex flex-col border border-red-700 rounded-md p-1">
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            <div>Desconto: R${props.desconto}</div>
            <div>Valor total: R${props.funcao(props.valor, props.desconto)}</div>
        </div>
    )
}

export default Card;