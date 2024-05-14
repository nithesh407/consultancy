const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            const newItemId = action.payload.item.productID;
            const itemExist = state.cartItems.some(item => item.productID === newItemId);

            let updatedCartItems = null;

            if (itemExist) {
                updatedCartItems = state.cartItems.map(item => {
                    if (item.productID === newItemId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                updatedCartItems = [...state.cartItems, action.payload.item];
            }

            return {
                ...state,
                cartItems: updatedCartItems
            };


        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productID !== action.payload.itemId)
            };


        case 'INCREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.productID === action.payload.itemId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                })
            };


        case 'DECREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.productID === action.payload.itemId) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                }).filter(item => item.quantity !== 0)
            };


        default:
            return state;
    }
};

export default cartReducer;