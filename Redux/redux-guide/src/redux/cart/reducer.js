import CartActionTypes from "./action-types";


const initialState = {
    products: [],
    productsTotalPrice: 0
}

// No case das actions SEMPRE precisamos retornar um novo objeto sempre, e esse novo objeto será assinalado ao nosso State.

const cartReducer = (state= initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
        // Verificar se o produto já está no carrinho

            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);

        // Caso esteja no carrinho aumentar sua quantidade + 1;

            if(productIsAlreadyInCart) {
                return {...state, products: state.products.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)}
            }

        // Se ele estiver adicioná-lo

            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
            }

        default:
            return state;
    }
}

export default cartReducer;