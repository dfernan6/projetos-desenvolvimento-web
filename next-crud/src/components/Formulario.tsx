import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '0')
    return (
        <div className="forms">
            {id ? (
            <Entrada
                somenteLeitura
                texto="Código"
                valor="Teste"
            />
            ) : false}
            <Entrada
               texto="Nome: " 
               valor={nome} 
               valorMudou={setNome}
            />
            <Entrada 
               texto="Idade: " 
               tipo="number"
               valor={idade} 
               valorMudou={setIdade}
            />
            <div>
                <Botao cor='gray'>
                    confirmar
                </Botao>
                <Botao cor='red'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}