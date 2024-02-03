import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
        <button><Link to='/home'>Home</Link></button>
        <button><Link to='/contatos'>Contatos</Link></button>
        <button><Link to='/sobre'>Sobre Nós</Link></button>
        </>
    )
}

/* Os links fazem com que a página não atualize; */

export default Menu;