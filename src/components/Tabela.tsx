import Cliente from '../core/Cliente';
import { IconeEdicao,IconeLixo } from './icones';

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (clientes: Cliente) => void
    clienteExcluido?: (clientes: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    const renderizarCabecalho=()=>{
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    const renderizarDados=()=>{
        return props.clientes?.map((clientes, i)=>{
            return(
                <tr key={clientes.id} 
                className={`${i%2===0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{clientes.id}</td>
                    <td className="text-left p-4">{clientes.nome}</td>
                    <td className="text-left p-4">{clientes.idade}</td>
                    {exibirAcoes ? renderizarAcoes(clientes) : false}
                </tr>
            )
        })
    }

    const renderizarAcoes=(cliente: Cliente)=>{
        return (
            <td className='flex justify-center' >
                {props.clienteSelecionado ? (
                    <button onClick={()=>props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `} >
                    {IconeEdicao}
                </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={()=>props.clienteExcluido?.(cliente)}className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `} >
                    {IconeLixo}
                </button>
                ) : false}
            </td>
            
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden" >
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-purple-500 to-purple-800
            `} >
                {renderizarCabecalho()}
            </thead>
            <tbody>
            {renderizarDados()}
            
            </tbody>
            
        </table>
    )
}