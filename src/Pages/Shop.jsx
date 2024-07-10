import ProductList from "../ProductList"

const Shop = () =>{
    return(
        <>
        <div className="ourProduct">
            <h1>Our Products</h1>
            <p>Our fashion brand offers a range of personalized 
                services to enhance your shopping experience. 
                From expert styling advice to custom tailoring, 
                we are here to help you look and feel your best.</p>
        </div>
        <div className="mainProductList">
            <ProductList/>
            <button className="loadMore">Load more products</button>
        </div>
        </>
    )
}

export default Shop