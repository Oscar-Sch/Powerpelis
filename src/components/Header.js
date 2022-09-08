import {NavLink} from "react-router-dom";
import "../css/Header.css"
// import SvgLogo from "../assets/SvgLogo";
import SvgLogo from '../assets/Logo.png'
import Logo from "./Logo";


function Header(){
    return(
        <header>
            <div className="deco-header1"></div>
            <div className="deco-header2"></div>

            {/* <div className="logo-container">
                <NavLink to={"/"}><img className="logo" src={logo}/></NavLink>
            </div> */}
            <NavLink to={"/"} className="SvgLogo-container">
                {/* <SvgLogo /> */}
                {/* <img className="Logo" src={SvgLogo}/> */}
                <Logo className="Logo"/>
            </NavLink>
            <div className="nav-container">
                <nav>
                    <ul className="first-list">
                        <li className="navbar-list li1">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li className="navbar-list li2">
                            <NavLink to={"/listado"}>Catálogo</NavLink>
                        </li>
                        <li className="navbar-list li3">
                            <NavLink to={"/contacto"}>Contacto</NavLink>
                        </li>
                    </ul>
                    <ul className="second-list">
                        <li className="login navbar-list li4">
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                        <li className="loged navbar-list li5">
                            <NavLink to={""}>Cerrar Sesión</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;