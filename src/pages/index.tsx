import Card from "@/components/Card";
import Topo from "@/components/Topo";

const produtos = [
  {
    produto: 'Mouse',
    valor: 49.90,
    desconto: 0,
    disponivel: true
  },
  {
  produto: 'Teclado',
  valor: 69.90,
  desconto: 10,
  disponivel: true
 },
 {
  produto: 'Monitor',
  valor: 499.90,
  desconto: 0,
  disponivel: true
 },
 {
  produto: 'CPU',
  valor: 999.90,
  desconto: 100,
  disponivel: true
 },
 {
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

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Compre ou monte seu PC conosco:</div>
      </div>
      <div className="flex justify-center gap-3">
        {
          produtos.map((e:any) => {
          if(e.disponivel) {
            return(
              // eslint-disable-next-line react/jsx-key
              <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calc_desc} />
            )
          }  
        })
      }
      </div>
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}
