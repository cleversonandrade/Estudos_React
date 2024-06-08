//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const nome = 'Cleverson';
  const curso = 'React com Typescript';
  const instituicao = 'CFB - Cursos.';

  function retnome(){
    return nome
  }

  return (
    <div className="flex-col border-none h-32 bg-blue-300 ">
      <div>{`Nome do aluno: ${nome}`}</div>
      <div>{instituicao}</div>
      <div>{retnome()}</div>
      <div>{`Estudando atualmente: ${curso}`}</div>
    </div>
  );
}
