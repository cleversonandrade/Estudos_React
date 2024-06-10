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
        <nav>
          <Link href={'/'}>
              Home
          </Link>
          <Link href={{pathname:'/produtos/produtos', query:{nome:'Cleverson', curso:'React Next'}}}>
              Produtos
          </Link>
          <Link href={'/teste/teste'}>
              Teste
          </Link>
        </nav>
      </div>
  )
}

export default Topo;