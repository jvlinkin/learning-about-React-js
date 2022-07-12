function Evento(){
    function meuEvento(){
        console.log('Clicouuuuu!')
    }

    return(
        <>
        <p>Clique aqui para disparar um evento</p>
        <button onClick={meuEvento}>Clique!</button>
        
        </>
    )


}



export default Evento