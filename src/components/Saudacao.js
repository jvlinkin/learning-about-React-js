function Saudacao({nome}){

    return(
        <div>
            { 
            nome && <p>Olá!{nome} tudo bem!?</p>
            }
        </div>
    )
}

export default Saudacao