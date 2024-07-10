import CartSetup from "../CartSetup.jsx";
import ShippingInfo from "../component/ShippingInfo.jsx";
import { Ordersum } from "../component/Ordersum.jsx";


const Checkout = () => {
    return(

        <>
      <ShippingInfo/>
      <CartSetup/>
      <Ordersum/>
        </>
    );
}

export default Checkout;