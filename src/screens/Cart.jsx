import { useSelector, useDispatch } from 'react-redux';
import {  deleteFromCart, incrementQuantityAction, decrementQuantityAction } from '../actions/cartAction.js';
const Cart = () => {

    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    let subTotal = cartItems.reduce((x, item) => x + item.price, 0)

    const dispatch = useDispatch()
    const handleDelete = (item) => {
        dispatch(deleteFromCart(item));
    };

    return (
        <>

            <div>
                <div className="row justify-content-around">

                    <div className="col-md-6">

                        <h2 className='mt-4'>My Cart</h2>

                        {cartItems.map((item, index) => {
                           
                            return <div className="d-flex  m-1" id={item._id} key={index}>

                                <div className='text-start w-100'>
                                    <h1>{item.name} [{item.varient}]</h1>
                                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>

                                    <h1 style={{ display: "inline" }}>Quantity : </h1>

                                    <i className="fa-solid fa-plus" onClick={() => {
                                        dispatch(incrementQuantityAction(item, item.varient))
                                    }}></i>
                                    <b>{item.quantity} </b>

                                    <i className="fa-solid fa-minus" onClick={() => {
                                        dispatch(decrementQuantityAction(item, item.varient))
                                    }}></i><hr />
                                </div>

                                <div className='m-1 w-100 '>
                                    <img className='rounded-circle' src={item.image} alt={`${item.name} image`} style={{ height: "80px", width: "80px" }} />
                                </div>

                                <div className='m-1 w-100'>
                                    <i className="fa-solid fa-trash m-3" onClick={() => handleDelete(item)}></i>
                                </div>

                            </div>

                        })}


                    </div>

                    <div className="col-md-4">

                        <h3 style={{ fontSize: "35px", margin: ".8em 0" }}>SubTotal = {subTotal} /-</h3>

                        <button className='btn btn-outline-warning btn-sm'>CHECK OUT</button>
                    </div>

                </div>
            </div>


        </>

    )
}

export default Cart