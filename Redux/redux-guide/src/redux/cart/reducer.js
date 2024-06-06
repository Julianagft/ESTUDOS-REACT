import CartActionTypes from "./action-types";


const initialState = {
    products: [],
}

// No case das actions SEMPRE precisamos retornar um novo objeto sempre, e esse novo objeto será assinalado ao nosso State.

const cartReducer = (state= initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
        // Verificar se o produto já está no carrinho

            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);

        // Caso esteja no carrinho aumentar sua quantidade + 1;

            if(productIsAlreadyInCart) {
                return {...state, 
                    products: state.products.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)}
            }

        // Se ele estiver adicioná-lo

            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
            }

            case CartActionTypes.REMOVE_PRODUCT:
              return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
                // Pega todos os produtos que não tem o ID igual ao ID dos produtos que estamos recebendo;
              } 
              
            case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
                return {
                ...state,
                products: state.products.map((product) => product.id === action.payload ? {
                    ...product,
                    quantity: product.quantity + 1
                } : product)
            }

            case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload) {
                        // Se a quantidade for maior que 1, diminui a quantidade
                        if (product.quantity > 1) {
                            return { ...product, 
                                    quantity: product.quantity - 1 
                                };
                        } else {
                            // Se a quantidade for 1, filtra o produto (removendo-o)
                            return null;
                        }
                    }
                    return product;
                }).filter(product => product !== null) // Remove os produtos que foram transformados em null
            };       

            default:
                return state;
    }

}

export default cartReducer;