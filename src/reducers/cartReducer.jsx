export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(
        (item) => item.id === action.payload.id
        // item => console.log('----------' +item )
      );
      if (alreadyExists) {
        return {

          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case 'DELETE_FROM_CART': return {
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
    }

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: action.payload.quantity,
              price: action.payload.price,
            }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: action.payload.quantity,
              price: action.payload.price,
            }
            : item
        ),
      };
    default:
      return state;
  }
};




