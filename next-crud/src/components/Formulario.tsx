import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
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
                valor={id}
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
                <Botao cor='gray'
                onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}
                >
                    confirmar
                </Botao>
                <Botao cor='red'
                onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}