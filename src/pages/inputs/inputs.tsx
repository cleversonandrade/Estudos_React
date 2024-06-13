import Topo from "@/components/Topo";
import { useState } from "react"

export default function Inputs() {

    const [nome, setNome] = useState<string>('');
    const [curso, setCurso] = useState<string>('');

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
            <option value=""></option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Typescript">Typescript</option>
            <option value="Node">Node</option>
        </select> 
        </div>
        <div>Nome digitado: {nome}</div>
        <div>Curso: {curso}</div>
      </div>
    )
}