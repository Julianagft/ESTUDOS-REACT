import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart', // nome do reducer
    initialState,
    reducers: { //As actions que vão alterar esse reducer;
        addProduct: (state, action) => {
            // Verificar se o produto já está no carrinho

            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);

            // Caso esteja no carrinho aumentar sua quantidade + 1;

            if(productIsAlreadyInCart) {
                // No REDUX Func não precisamos retornar o objeto inteiro:
               state.products = state.products.map(
                (product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product
            );
                return
            }
            // Se ele estiver adicioná-lo
             state.products = [...state.products, {...action.payload, quantity: 1}]; 
        },
        increaseProductQuantity: (state, action) => {
            state.products = state.products.map(
                (product) => product.id === action.payload ? {
                    ...product,
                    quantity: product.quantity + 1
                } : product
            );
        },
        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map(
                (product) => {
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
                }
            ).filter(product => product !== null) // Remove os produtos que foram transformados em null
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
            // Pega todos os produtos que não tem o ID igual ao ID dos produtos que estamos recebendo;
        }
    }
})

export const {
    addProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;