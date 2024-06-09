interface CardPros {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any
}

const Card = (props:CardPros) => {
    return(
        <div className={`flex  justify-center flex-col border-4 
        ${props.desconto > 0 
        ?' border-red-700':
          'border-blue-700'} 
            rounded-md p-1`
            }>
            <div>Produto: {props.produto}</div>
            <div>Valor: R${props.valor}</div>
            {props.desconto > 0 && (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Valor total: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}   
        </div>
    );
}

export default Card;