import {useState} from 'react'

function Condicional(){

    //hooks
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    

    function enviarEmail(e){
        console.log('testandooooo', email)
        setUserEmail(email)
        e.preventDefault()
    }

    function limparEmail(){
        setUserEmail = ('')
    }

    
    
    return(
        <div>
            <h2>Cadastre seu email</h2>

            <form>
                <input type="text" name="email" placeholder="Digite seu email ..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail} type="sumbit" name="btnCadastrar"> Enviar e-mail</button>
                
                {userEmail &&
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>   
                </div>
                    
                }
            </form>
        </div>
    )
}

export default Condicional