import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
//useSelector:  Usamos para acessar um dado dentro do reducer;
//useDispatch:  Usamos para alterar um dado dentro do reducer;

import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector( (rootReducer) => rootReducer.userReducer) // Vai assinalar todo o state do nosso userReducer para esse objeto, por isso conseguimos acessar o currentUser daqui;

  const dispatch = useDispatch()

  console.log(currentUser);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({nome: "Juliana", idade: 29}))
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {
          currentUser ? (
            <div onClick={handleLogoutClick}>Sair</div>
          ) : (
            <div onClick={handleLoginClick}>Login</div>
          )
        }
        
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
