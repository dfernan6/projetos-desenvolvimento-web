import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import UseClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    clientes,
    cliente,
    selecionarCliente,
    novoCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
    } = UseClientes()

  return (
    <div className="center">
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
          <Botao cor='blue'
            onClick={novoCliente}>
              Novo cliente
          </Botao>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            > 
            </Tabela>
            </>
        ) : (
          <Formulario
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => exibirTabela} />
        )}       
      </Layout>
    </div>
  )
}
