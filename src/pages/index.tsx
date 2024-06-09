import Topo from "@/components/Topo";


export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Compre ou monte seu PC conosco:</div>
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
