import { CartList } from './component/CartList.jsx';
import Carts from './carts.jsx'

  const CartSetup = () => {
    
    return (
        <div className="cartSetup">
            {CartList.map(item => (<Carts 
            img={item.img}
            size={item.size}
            title={item.title} 
            quantity={item.quantity}
            price={item.price} 
            seller={item.seller}
            key={item.id}/>))}
        </div>
    );

  }

  export default CartSetup;