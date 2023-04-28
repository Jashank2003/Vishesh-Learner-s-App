import {Link, NavLink} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

const Navbar = () => {
    return(<div className="shadow-lg backdrop-blur py-5 text-grey-900 bg-grey-50">
            <nav className="flex items-center container mx-auto">
                <ul className="list-none flex justify-center items-center ml-auto gap-5">
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>About</NavLink>
                    </li>
                    <li>
                        <NavLink>Product</NavLink>
                    </li>
                    <li>
                        <NavLink>Booking</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink><FaShoppingCart/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;