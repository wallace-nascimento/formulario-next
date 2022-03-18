import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from '../components/Botao';
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {
 
const { 
  cliente, 
  clientes, 
  novoCliente, 
  salvarCliente,
  clienteSelecionado, 
  excluirCliente, 
  tabelaVisivel,
  exibirTabela
} = useClientes()

return (
    <div className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>

      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
          <div className="flex justify-end" >
            <Botao cor="green"
            onClick={novoCliente}
            className="mb-4" >
               Novo Cliente 
               </Botao>
          </div>
          <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={excluirCliente}
          />
          </>
        ) : (
          <Formulario 
          clientes={cliente} 
          clienteAlterado={salvarCliente}
          cancelado={exibirTabela}
          
          />
        )}
        
        
      </Layout>
      
    </div>
  )
}
