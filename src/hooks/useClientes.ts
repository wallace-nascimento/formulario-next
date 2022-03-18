import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/bd/colecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaForm from "./useTabelaForm"

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()

  const{ tabelaVisivel, formularioVisivel, exibirTabela, exibirForm }= useTabelaForm()

  const[clientes,setClientes] = useState<Cliente[]>([])
  const[cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  
  useEffect(obterTodos,[])
  function obterTodos() {
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
    })
}
  

  const clienteSelecionado=(cliente:Cliente)=>{
    setCliente(cliente)
    exibirForm()
  }
  async function excluirCliente(clientes:Cliente){
    await repo.excluir(clientes)
    obterTodos()
  }
  async function salvarCliente(clientes:Cliente){
    await repo.salvar(clientes)
    obterTodos()
  }
  const novoCliente=()=>{
    setCliente(Cliente.vazio())
    exibirForm()
  }
  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      excluirCliente,
      clienteSelecionado,
      obterTodos,
      tabelaVisivel,
      formularioVisivel,
      exibirTabela
  }
}

function useTabela(): { tabelaVisivel: any; formularioVisivel: any; exibirTabela: any; exibirForm: any } {
    throw new Error("Function not implemented.")
}
