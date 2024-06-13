import { useState } from "react";

interface ICarroProps {
    carros: any
    ano: number
    marca: string
    modelo: string
    }


export default function Carro(props:ICarroProps) {
    const [carros, setCarros] = useState<string>('Celta')

    let carro = [
        {
            ano: 2018,
            marca: 'Honda',
            modelo: 'Sedan'
        },
        {
            ano: 205,
            marca: 'Toyota',
            modelo: 'Sedan'
        },
        {
            ano: 2022,
            marca: 'Honda',
            modelo: 'SUV'
        },
        {
            ano: 2024,
            marca: 'Nissan',
            modelo: 'Caminhonete'
        }
]



    return(
        <div className={'flex flex-col p-2 gap-1'}>
            Carro:
            <div>
              
            </div>
        </div>
    )
}
