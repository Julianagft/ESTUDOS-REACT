import './Section.css'
import CardIcon from '../CardIcon/CardIcon'

function Section (props){
   
   
    return (
        <div className='section'>

            <h1> {props.titulo} </h1>

            <div className='conteudo'>
                {props.children} 
            </div>
            {/* 'Children' é uma palavra reservada para determinar os filhos dentro de um componente. */}

        </div>
    )
}

export default Section;