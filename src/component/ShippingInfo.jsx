const ShippingInfo = () => {
    return(
        <div>

            <div className="checkOut">
                <h1>Checkout</h1>
                <p> <strong>Address</strong>--------- Shipping --------- Payment
                </p>
            </div>
            <div className="forForm">
                <div><input type="text"  placeholder="Michelle"/><input type="text" placeholder="Urphazin"/></div>
                <input type="text"  placeholder="49 Featherstone street, ECIY sSY, United Kingdom"/>
                <input type="text" placeholder="Apartment"/>
                <input type="" placeholder="United Kingdom"/>
                <div><input type="text"  placeholder="London"/><input type="text" placeholder="London"/> <input type="text" placeholder="ECIY 8SY"/>
                </div>
                <input type="text" placeholder="Optional"/>
                <div  className="checklistInput"><input type="checkbox" /><p>Save contact information</p></div>
                <a href=""><button className="shipBtn">Continue to shipping</button></a>
            </div>

        </div>
    )
}

export default ShippingInfo