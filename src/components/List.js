import Item from "./Item"

function List(){

    return(
        <>
            <ul>
                <h1>Minha lista</h1>
                <Item marca="Fiat" ano_lancamento={1958}/>
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Renault' ano_lancamento={2015}/>
            </ul>
        </>
    )
}

export default List