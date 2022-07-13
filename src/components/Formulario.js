import { useState } from 'react';

function Formulario(){

    function cadastrar(e){
        e.preventDefault()
        console.log(`o Nome do usuário foi ${name} e a senha foi ${password}`)
        console.log('Cadastro realizado com sucesso.')
    }

    //hooks - useState
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
        <h1> Meu cadastro</h1>
        <form onSubmit={cadastrar}>

            <label htmlFor="name">Name: </label>
            <input type="text"
             name="name"
             placeholder="Digite seu nome"
             onChange={(e) => setName(e.target.value)}
             />
            


            <label htmlFor="password">Password: </label>
            <input type="password" 
            id="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}/>
            
                
            
            <button type="submit">Cadastrar</button>           
        </form>
        </>
    )
}

export default Formulario