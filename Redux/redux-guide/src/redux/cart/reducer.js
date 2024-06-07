import CartActionTypes from "./action-types";


const initialState = {
    products: [],
}

// No case das actions SEMPRE precisamos retornar um novo objeto sempre, e esse novo objeto será assinalado ao nosso State.

const cartReducer = (state= initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cartReducer;