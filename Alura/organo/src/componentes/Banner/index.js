import './Banner.css';

function Banner() {
    // JSX
    return (
        // Quando trabalhamos com REACT não usamos class na tag, pois é uma palavra reservada do JS. Usamos 'className'.
        <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}    

export default Banner;