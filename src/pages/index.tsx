
const nome = 'Cleverson';
const curso = 'React com Typescript';
const instituicao = 'CFB - Cursos.';
const logo = 'Logo';

const Topo = () => {
  return(
    <div className="flex justify-between items-center h-32 bg-blue-300">
      <div>{logo}</div>
      <div className="flex flex-col justify-center items-center"> 
        <div className="text-3xl">{nome}</div>
        <div>{curso}</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
      <div>{instituicao}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Curso de React</div>
        <div>TypeScrip</div>
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
