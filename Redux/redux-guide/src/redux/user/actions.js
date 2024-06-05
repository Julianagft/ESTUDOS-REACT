// Separa as ACTIONS em arquivos separados 

import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
    //O type precisa ser EXATAMENTE igual ao type que está no userReducer para funcionar (por isso a importancia de armazenar dentro das action-types);

    type: UserActionTypes.LOGIN,
    payload
});

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT 
});