import Card from "@/components/Card";
import Topo from "@/components/Topo";

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Curso de React</div>
        <div>TypeScrip</div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto={'Mouse'} valor={'R$49,90'}/>
        <Card produto={'Teclado'} valor={'R$69,90'}/>
        <Card produto={'Monitor'} valor={'R$499,90'}/>
        <Card produto={'Placa de vídeo'} valor={'R$899,90'}/>
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
