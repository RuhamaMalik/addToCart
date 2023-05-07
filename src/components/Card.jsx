import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import {  addToCartAction } from '../actions/cartAction';


const Cards = ({ products }) => {

  let [varient, setVarient] = useState("small")
  let [quantity, setQuantity] = useState(1)
  const [modalShow, setModalShow] = React.useState(false);
const dispatch = useDispatch();

const addtocart = () => {
dispatch(addToCartAction(products, quantity, varient));

}

  return (
 
    <div   className='m-2 shadow p-3 mb-5  rounded hover'  style={{width:"240px"}}  >


      <h1 >{products.name}</h1>

      <img src={products.image} onClick={() => setModalShow(true)} alt="" className='img-fluid' style={{ height: "150px", width: "170px" }} />

      {/* ////////////*/}

      <div className="d-flex">

        {/* ///////////*/}

        <div className='w-100 m-1'>
          <p>  Varients</p>
          <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
            {products.varients.map((varients, i) => {
              return <option value={varients} key={i}>{varients}</option>
            })}
          </select>
        </div>

        {/* /////////*/}

        <div className='w-100 m-1'>

          <p>Quantity</p>

          <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10)].map((x, i) => {
              return <option key={i} value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>

      </div>

    <div className="flex-container">

        <div className='mt-2 w-100 '>
          <h1>Price : {products.prices[0][varient] * quantity}</h1>
        </div>
        <div className=' w-100 mt-1'>
        <button className='btn btn-outline-warning btn-sm' onClick={addtocart}>Add to Cart</button>
        </div>
      </div>

{/* product detail */}

<MyVerticallyCenteredModal
products = {products}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </ div>)
}


// Modal Component show product detail popup

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.products.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Category : {props.products.category}</h4>
      
       <img src={props.products.image} className="img-fluid rounded mx-auto d-block" style={{ height: "300px"}} alt="" />
      <p className='mt-4' style={{color:"black"}}>{props.products.description}</p>
      </Modal.Body>
      <Modal.Footer>

         <button className='btn btn-outline-warning ' onClick={props.onHide}>
            Close
          </button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default Cards