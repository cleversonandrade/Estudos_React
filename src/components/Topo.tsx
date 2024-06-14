import Link from "next/link";

const nomeLoja = 'CPU IMPORTS';
const logo = 'Logo';
const subtitulo = 'Visite nossa loja';

const Topo =() => {
  return(
      <div className="flex flex-col justify-between items-center h-32 bg-blue-300">
        <div>{logo}</div>
        <div className='flex flex-col justify-center bg-zinc-300 h-28'>{nomeLoja}</div>
        <div>{subtitulo}</div>
        <nav className="flex gap-5">
          <Link href={'/'}>
              Home
          </Link>
          <Link href={{pathname:'/produtos/produtos', query:{nome:'Estudos', curso:'React Next'}}}>
              Produtos
          </Link>
          <Link href={'/teste/teste'}>
              Teste
          </Link>
          <Link href={'/usestate/usestate'}>
              State
          </Link>
          <Link href={'/useeffect/useeffect'}>
              UseEffect
          </Link>
          <Link href={'/carro/carro'}>
              Carro
          </Link>
          <Link href={'/inputs/inputs'}>
              Inputs
          </Link>
          <Link href={'/carro2/carro2'}>
              Carros 2
          </Link>
        </nav>
      </div>
  )
}

export default Topo;