import { useState } from "react";
import Topo from "@/components/Topo";

const carros = [
    {id:0, categoria:'Esporte', valor:'120000.00', modelo:'Golf GTI'},
    {id:1, categoria:'Esporte', valor:'2000000.00', modelo:'Camaro'},
    {id:2, categoria:'SUV', valor:'100000.00', modelo:'HRV'},
    {id:3, categoria:'SUV', valor:'100000.00', modelo:'T-Cross'},
    {id:4, categoria:'Utilitário', valor:'180000.00', modelo:'Hylux'},
    {id:5, categoria:'Utilitário', valor:'160000.00', modelo:'Ranger'},
]

export default function filtragem() {
    const [categoria, setCategoria] = useState('')
    const [linhas, setLinhas] = useState<any[]>([])

    function criarLinhas(cat:any) {
        setCategoria(cat)
        let linha:any[]=[]
        carros.forEach((e:any) => {
            if(e.categoria == cat) {
                linha.push(
                    <div className="flex flex-row w-[500px]" key={e.id}>
                        <div className="w-full">{e.modelo}</div>
                        <div className="w-full">{e.categoria}</div>
                        <div className="w-full">{e.valor}</div>
                    </div>
                )
            }
        })
        setLinhas(linha)
    }

    return(
        <div>
            <Topo />
            <label>Selecione a categoria: </label>
            <select value={categoria} onChange={(e) => (criarLinhas(e.target.value))}>
                <option value=""></option>
                <option value="Esporte">Esporte</option>
                <option value="SUV">SUV</option>
                <option value="Utilitário">Utilitário</option>
            </select>
            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Modelo:</div>
                    <div className="w-full">Categoria:</div>
                    <div className="w-full">Valor:</div>
                </div>
                {linhas}
            </div>
        </div>
    )
}