import { Prod } from './Prod.jsx';
import Product from './Product.jsx'

  const ProductList = () => {
    
    return (
        <div className='theProduct'>
            {Prod.map(item => (<Product 
            picture={item.picture} 
            title={item.title} 
            price={item.price} 
            rating={item.rating}
            key={item.id}/>))}
        </div>
    );

  }

  export default ProductList;