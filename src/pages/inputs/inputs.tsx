/* eslint-disable react/jsx-key */
import Topo from "@/components/Topo";
import { useEffect, useState } from "react"
import Globais from "@/components/Globais";


const cursos = ['','HTML','CSS','JavaScript','React','Typescript','Node',]
const ncursos = [
    {
        'curso':'HTML'
    },
    {
        'curso':'CSS'
    },
    {
        'curso':'JavaScript'
    },
    {
        'curso':'React'
    },
    {
        'curso':'Typescript'
    },
    {
        'curso':'Node'
    }
]

export default function Inputs() {
    const [nome, setNome] = useState<string>('');
    const [curso, setCurso] = useState<string>(cursos[0]);

   useEffect(() => {
    Globais.curso = 'React'
    Globais.ano = '2025'
    Globais.nome= 'Kauã'
   },[])

    function fCursos(){
        return cursos.map((e:any) => {
            return <option value={e}>{e}</option>
        })
    }

   const ccurso = ncursos.map((e:any) => {
    return <option value={e.curso}>{e.curso}</option>
   })

    return(
        <div>
        <Topo />
        <div className="campoForm">
            <label>Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="campoForm">
        <label>Cursos</label>
        <select value={curso} onChange={(e) => setCurso(e.target.value)}>
            {
               ccurso
            }
        </select> 
        </div>
        <div>Nome digitado: {nome}</div>
        <div>Curso: {curso}</div>
        <div>{Globais.nome}</div>
        <div>{Globais.curso}</div>
        <div>{Globais.ano}</div>
      </div>
    )
}