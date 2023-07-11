import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 30,'1'),
    new Cliente('Bia', 28,'2'),
    new Cliente('Paulo', 42,'3'),
    new Cliente('Cláudio', 33,'4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Excluindo...' + cliente.nome)
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className="center">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <Botao cor='blue'
            onClick={novoCliente}>
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
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')} />
        )}       
      </Layout>
    </div>
  )
}
