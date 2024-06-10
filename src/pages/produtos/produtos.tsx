import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";


const produtos = [
    {
      id: 1,
      produto: 'Mouse',
      valor: 49.90,
      desconto: 0,
      disponivel: true
    },
    {
      id: 2,
      produto: 'Teclado',
      valor: 69.90,
      desconto: 10,
      disponivel: true
    },
    {
      id: 3,
      produto: 'Monitor',
      valor: 499.90,
      desconto: 0,
      disponivel: true
    },
    {
      id: 4,
      produto: 'CPU',
      valor: 999.90,
      desconto: 100,
      disponivel: true
    },
    {
      id: 5,
      produto: 'Placa de vídeo',
      valor: 899.90,
      desconto: 0,
      disponivel: true
    },
];

const calc_desc = (v:number, d:number) => {
    return v-d
}
  
const calc_desc_2 = (v:number, d:number) => {
    return v-(d/2)
}

const ProdutosPagina = () => {
    const router = useRouter()
    // const nome = router.query.nome
    // const curso = router.query.curso
    const {nome, curso} = router.query
    console.log(nome)
    console.log(curso)
    return(
        <div>
            <Topo />
            <div className="flex justify-center gap-3">
                {
                produtos.map((e:any) => {
                    if(e.disponivel) {
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calc_desc} />
                        )}  
                    })
                }
            </div>
        </div>
    )
}

export default ProdutosPagina;