import { Link } from 'react-router-dom'

export const Ordersum = () => {
    return(
        <div className="orderSum">
            <h3>Order Summary</h3>
            <input type="text" placeholder='WXUEPIEUPOIERW-00293' />
            <div className='subShip'>
                <p>Subtotal</p>
                <p>$285</p>
            </div>
            <div className='subShip'>
                <p>Shipping</p>
                <p>Calculated upon checkout</p>
            </div>
            <div className='subShip'>
                <p>Total</p>
                <p>$285</p>
            </div>
            <Link to="/checkout"><button>Continue to checkout</button></Link>
        </div>
    );
}


export const Ordersums = () => {
    return(
        <div className="orderSum">
            <h3>Order Summary</h3>
            <input type="text" placeholder='WXUEPIEUPOIERW-00293' />
            <div className='subShip'>
                <p>Subtotal</p>
                <p>$285</p>
            </div>
            <div className='subShip'>
                <p>Shipping</p>
                <p>$30</p>
            </div>
            <div className='subShip'>
                <p>Total</p>
                <p>$315</p>
            </div>
        </div>
    );
}
