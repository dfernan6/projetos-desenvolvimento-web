import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
    
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>{exibirAcoes?<th>Ações</th> :
                false }</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) :
                    false}
                </tr>
            )
        })

    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td>
                {props.clienteSelecionado ? (
                <button onClick={() => props.clienteSelecionado?.(cliente)
                }>Editar
                </button>
                ) : false }
                {props.clienteExcluido ? (
                <button onClick={() => props.clienteExcluido?.(cliente)
                }>Excluir
                </button>
                ) : false }
            </td>
        )
    }

    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}