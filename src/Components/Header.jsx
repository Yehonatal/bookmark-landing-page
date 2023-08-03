import "../Style/style.css";
import MainLogo from "../assets/images/logo-bookmark.svg";
import HamIcon from "../assets/images/icon-hamburger.svg";

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={MainLogo} alt="logo" />
            </div>
            <nav className="header__flx hidden-on-mobile">
                <ul>
                    <li>
                        <a href="#">FEATURES</a>
                    </li>
                    <li>
                        <a href="#">PRICING</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                    <li>
                        <button className="log-btn">LOGIN</button>
                    </li>
                </ul>
            </nav>
            <nav className="hidden-on-desktop">
                <img src={HamIcon} alt="Hamburger icon" />
            </nav>
        </header>
    );
};

export default Header;
