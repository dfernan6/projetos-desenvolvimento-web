import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 30,'1'),
    new Cliente('Bia', 28,'2'),
    new Cliente('Paulo', 42,'3'),
    new Cliente('Cláudio', 33,'4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Excluindo...' + cliente.nome)
  }

  return (
    <div className="center">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}
