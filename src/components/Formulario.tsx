import { useState } from 'react';
import Entrada from './Entrada';
import Botao from './Botao'
import Cliente from '../core/Cliente'


interface FormularioProps{
    clientes: Cliente
    clienteAlterado: (clientes:Cliente) => void
    cancelado?: ()=> void
}

export default function Formulario(props: FormularioProps){
    const id = props.clientes?.id
    const[nome,setNome]=useState(props.clientes?.nome ?? '')
    const[idade,setIdade]=useState(props.clientes?.idade ?? '')
    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto='Código' 
                valor={id} />
            ): false}
            
            <Entrada 
            texto='Nome' 
            valor={nome} 
            valorMudou={setNome}
            />
            <Entrada 
            texto='Idade' 
            tipo='number' 
            valor={idade}
            valorMudou={setIdade}
            />
            <div className='mt-7 flex justify-end' >
            <Botao cor='green' className='mr-2' 
            onClick={()=> props.clienteAlterado?.(new Cliente(nome, +idade, id))}  >
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao onClick={props.cancelado}>
                Cancelar
            </Botao>
            </div>
            
            
            
        </div>
    )
}