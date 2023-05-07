export const addToCartAction = (product, quantity, varient) => (dispatch, getState) => {   
   
    const cartItem = {
      name: product.name,
      id: product.id,
      image: product.image,
      varient: varient,
      quantity: quantity,
      prices: product.prices,
      price: product.prices[0][varient] * quantity
    };
  
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  }
  
  export const deleteFromCart = (product) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: product });
    const { cartItems } = getState().cartReducer;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  export const incrementQuantityAction = (item, varient) => (dispatch, getState) => {
    if(item.quantity ===10){
      alert("you can not add more than 10 quantities")
      }else{
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity + 1,
        varient,
        price: item.prices[0][varient] * (item.quantity + 1),
      },
    });
  }
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  }
  
  export const decrementQuantityAction = (item, varient) => (dispatch, getState) => {
    if(item.quantity < 1 ){
       dispatch({ type: 'DELETE_FROM_CART', payload: item });
      const { cartItems } = getState().cartReducer;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }else{
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: {
        id: item.id,
        quantity: item.quantity - 1,
        varient,
        price: item.prices[0][varient] * (item.quantity - 1),
      },
    });
  }
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  }