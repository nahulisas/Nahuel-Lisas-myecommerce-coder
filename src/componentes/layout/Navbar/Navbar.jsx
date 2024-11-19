import Badge from "../../common/Badge/Badge";
import "./navbar.css";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/">
                        <img className="navbar__logo__img" src={logo} alt="" />
                    </Link>
                </div>
                <menu className={`navbar__menu__container ${isOpen && "open"}`}>
                    <ul className={`navbar__menu`}>
                        <Link className="navbar__menu__link" to="/">
                            <li>Inicio</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/monitores"
                        >
                            <li>Monitores</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/gabinetes"
                        >
                            <li>Gabinetes</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/placas_de_video"
                        >
                            <li>Placas de video</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/mothers"
                        >
                            <li>Motherboards</li>
                        </Link>
                        <Link
                            className="navbar__menu__link"
                            to="/category/memorias"
                        >
                            <li>Memorias RAM</li>
                        </Link>
                    </ul>
                </menu>
                <div className="navbar__ux">
                    <Link to="/cart">
                        <Badge />
                    </Link>
                    <button
                        className={`menu_toggle ${isOpen && "open"}`}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
