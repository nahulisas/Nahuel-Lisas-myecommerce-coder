import { Avatar } from "@mui/material";
import Badge from "../../common/Badge/Badge";
import "./navbar.css";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/">
                        <img className="navbar__logo__img" src={logo} alt="" />
                    </Link>
                </div>
                <menu className="navbar__menu__container">
                    <ul className="navbar__menu">
                        <Link className="navbar__menu__link" to="/">
                            <li>Inicio</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/deportivas"
                        >
                            <li>Deportivas</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/urbanas"
                        >
                            <li>Urbanas</li>
                        </Link>
                    </ul>
                </menu>
                <div className="navbar__ux">
                    <Link to="/cart">
                        <Badge />
                    </Link>
                    <Avatar />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
