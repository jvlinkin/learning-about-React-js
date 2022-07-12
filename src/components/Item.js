import PropTypes from 'prop-types'

function Item ({marca, ano_lancamento}){


    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}


//Tipando as props, passando também o 'isRequired' para tornar a propriedade obrigatória.
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

//Passando valores padrões para elas.
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item