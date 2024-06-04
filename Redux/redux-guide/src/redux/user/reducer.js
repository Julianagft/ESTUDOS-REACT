// Os reducers armazenam state. Esse userReducer amazenará o state do usuário;

import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null
};


// REDUCER
// Sempre vai receber por padrão dois parâmetros, o STATE e a ACTION;
// Sempre que uma ACTION é despachada todos os reducers são executados;

const userReducer = (state= initialState, action
) => {
    // É recomendado colocar esse modelo de caminho entidade/evento 
    if(action.type === UserActionTypes.LOGIN) {
        // Tudo que retornarmos dentro desse if será assinalado ao nosso STATE;
        // SEMPRE precisamos retornanr tudo que está dentro do 'State' E a propriedade que queremos alterar;
        return {...state, currentUser: action.payload};
    }
    // Se nenhuma action cair na condição que definimos precisamos retornar o State por padrão, ou teremos um erro do REDUX;
    return state;
}

export default userReducer;