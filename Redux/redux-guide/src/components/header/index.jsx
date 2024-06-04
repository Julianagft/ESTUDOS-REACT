import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
//useSelector:  Usamos para acessar um dado dentro do reducer;
//useDispatch:  Usamos para alterar um dado dentro do reducer;

import UserActionTypes from "../../redux/user/action-types";

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
    dispatch({
      type: UserActionTypes.LOGIN, //O type precisa ser EXATAMENTE igual ao type que está no userReducer para funcionar;
      payload: ({name: "Juliana", idade: 29})
    
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {
          currentUser ? (
            <div>Sair</div>
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
