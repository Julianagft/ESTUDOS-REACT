import './Header.css'

function Header() {
    return (
        <header className="header">
            <h1>React College</h1>
            <div className='botoes'>
                <button>Sobre</button>
                <button>Cursos</button>
            </div>
        </header>
    )
}

export default Header;