import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log('Clicouuuuu!')
    }

    function meuSegundoEvento(){
        console.log('Clicou denovooo!')
    }

    return(
        <>
        <p>Clique aqui para disparar um evento</p>
        <Button event={meuEvento} text="Clique para disparar o evento"/>
        <Button event={meuSegundoEvento} text="Clique para disparar o evento denovo!"/>
        
        </>
    )


}



export default Evento