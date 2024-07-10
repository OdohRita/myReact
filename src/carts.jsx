import { Component } from "react"

function Carts ({img, size, title, quantity, price, seller,}){
    return(
        <div className="cartItem">
            <div className="cartItemImg"><img src={img} alt="" /></div>
            <div className="cartItemBody">
                <h4>{title}</h4>
                <p>Size: {size}</p>
                <div className="cartItemInner">
                    <p>Quality: {quantity}</p> <p>by: {seller}</p>
                </div>
                <h3>$ {price}</h3>
            </div>
        </div>
    )
}

export default Carts;