import CartSetup from '../CartSetup.jsx';
import { Ordersum } from '../component/Ordersum.jsx';

const Cart = () => {
    return(
        <div className="classsMain">
        <div className="ourProduct">
            <h1>Our Cart</h1>
            <p>Not ready to checkout? <span><a href="">Continue Shopping</a></span></p>
        </div>
        <CartSetup/>

        <div className="orderInfo">
            <h3>Order Information</h3>
            <div className='subShip'>
                <p>Return Policy</p>
                <p>+</p>
            </div>
            <div className='subShip'>
                <p>Shipping Options</p>
                <p>+</p>
            </div>
            <div className='subShip'>
                <p>Shipping Options</p>
                <p>+</p>
            </div>
        </div>
            <Ordersum/>
        </div>
    );
}

export default Cart;