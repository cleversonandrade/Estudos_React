
const nome = 'Cleverson';
const curso = 'React com Typescript';
const instituicao = 'CFB - Cursos.';

const Topo = () => {
  return(
    <div className="flex-col border-none h-32 bg-blue-300 ">
      <div>{nome}</div>
      <div>{curso}</div>
      <div>{instituicao}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Topo />
    </div>
  );
}
