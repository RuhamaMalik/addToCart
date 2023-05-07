import React from 'react'
import products from '../../src/data' ;
import Cards from '../components/Card.jsx';



const Home = () => {

  return (
    <>
    <div className="container justify-content-center mt-5 ">

      <div className="row " >
        {
                products.map((products, index) => {
                  return <div className="col-md-4 col-sm-6" key={index}>
                    <div className='d-flex flex-column align-items-center'>
                      <Cards products={products} />
                    </div>
                  </div>
                })
  
              }

      </div>

    </div>
  </>
    )
}

export default Home