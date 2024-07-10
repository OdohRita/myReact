const Footer = () => {
    return(
        <footer>
            <div className="theFoot">
                <p>Stay up to date on the latest 
                    features and releases 
                    by joining our newsletter.</p>
                    <div className="inputCarry"><input type="text"  className="footerInput"/> <a href="#"><p>Sign Up</p></a></div>
                    <p>&copy; 2024 Steeze. All rights reserved.</p>
            </div>

            <div className="theFoot">
                <h3>About Us</h3>
                <ul>
                    <li>Steeze Express</li>
                    <li>Steeze Careers</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Notice</li>
                    <li>Official Stores</li>
                    <li>Flash Sales</li>
                </ul>
            </div>
            <div className="theFoot">
                <h3>Useful Links</h3>
                <ul>
                    <li>Service Center</li>
                    <li>Delivery options and timelines</li>
                    <li>Cororate and bulk purchases</li>
                    <li>Returns & Refund Timeline</li>
                    <li>Return Policy</li>
                </ul>
            </div>
            <div className="theFoot">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer