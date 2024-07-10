import Logo from "../assets/Steeze.svg"
import Search from "../assets/search.png"
import Account from "../assets/account.png"
import Cart from "../assets/cart.png"
import Fav from "../assets/favourite.png"
import Menu from "../assets/icon.png"
import Help from "../assets/help.svg"
import { Link } from "react-router-dom"

function Header(){
    return(
        <>
        <header>
            <div className="headerMain">
                <a href="#"><img src={Logo} alt="Logo"  width="90px" /></a>
                <div className="mobMenu">
                    <a href=""><img src={Search} alt="Search" /></a>
                    <a href=""><img src={Account} alt="Account" /></a>
                   <a href=""> <img src={Fav} alt="Favourite" /></a>
                    <Link to="/cart"><img src={Cart} alt="Cart" /></Link>
                    <a href=""><img src={Menu} alt="Menu" className="menu"/></a>
                    
                </div>

                <div className="deskMenu">
                    <ul className="desUlMenu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>New Arrivals</li></a>
                        <a href="#"><li>Sales</li></a>
                        <a href="#"><li>Categories</li></a>
                    </ul>
                    <div className="divForSearch">
                        <div className="forInput menuDeskImg">
                            <img src={Search} alt="" /><input type="text" placeholder="Search" /> 
                        </div>
                        <a href="#">
                        <div className="menuDeskImg"><img src={Account} alt="Account" /><p>Account</p>
                        </div>
                        </a>
                        
                        <a href="#">
                        <div className="menuDeskImg"><img src={Help} alt="Help" /><p>Help</p></div>
                        </a>
                       <Link to="/cart"> <div className="menuDeskImg"><img src={Cart} alt="Cart" /><p>Cart</p></div></Link>
                        
                    </div>
                </div>

            </div>
        </header>
        </>
    )
}

export default Header