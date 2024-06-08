import Card from "@/components/Card";
import Topo from "@/components/Topo";

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
        <div>Curso de React</div>
        <div>TypeScrip</div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto={'Mouse'} valor={49.90} desconto={0} funcao={calc_desc} />
        <Card produto={'Teclado'} valor={69.90} desconto={5} funcao={calc_desc} />
        <Card produto={'Monitor'} valor={499.90} desconto={10} funcao={calc_desc_2} />
        <Card produto={'Placa de vídeo'} valor={899.90} desconto={100} funcao={calc_desc_2} />
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
