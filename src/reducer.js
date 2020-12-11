export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) =>
    basket.reduce((tot, arr) => tot + arr.price, 0)

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            const newBasket = [...state.basket]
            console.log(newBasket)

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket,
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        default:
            return state
    }
}
