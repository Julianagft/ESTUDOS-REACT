import './CardIcon.css'

function CardIcon({titulo, descricao}) {
  
    return (
        <div className='card '>
            <i>icone</i>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}

export default CardIcon; 