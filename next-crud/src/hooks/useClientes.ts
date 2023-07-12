import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/colecaoCliente"
import { useState, useEffect  } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function UseClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()
  
  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  function excluirCliente(cliente: Cliente) {
    repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  function salvarCliente(cliente: Cliente) {
    repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}