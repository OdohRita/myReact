// import React from 'react';
// import { Prod } from './Prod.jsx'
import star from './assets/Star.png'

function Product({picture, title, price, rating}){

    return(
        <div className='productClass'>
            <img src={picture} alt="products" className='productName'  />
            <div>
                <h4>{title}</h4>
                <p className='pRod'>${price} <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" /><span>({rating})</span> </p>
                <button className='button'>ADD TO CART</button>
            </div>
            
        </div>
    );
    
}
export default Product