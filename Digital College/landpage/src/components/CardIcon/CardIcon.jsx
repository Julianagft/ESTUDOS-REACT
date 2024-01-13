import './CardIcon.css'

function CardIcon(props) {
  
    return (
        <div className='card '>
            <i>icone</i>
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
        </div>
    )
}

export default CardIcon; 