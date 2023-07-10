import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
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

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className="center">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <Botao cor='blue'
            onClick={() => setVisivel('form')}>
              Novo cliente
          </Botao>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            > 
            </Tabela>
            </>
        ) : (
          <Formulario
          cliente={clientes[2]}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')} />
        )}       
      </Layout>
    </div>
  )
}
