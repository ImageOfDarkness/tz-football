import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import HeaderButton from "./HeaderButton/HeaderButton";
import './Header.scss'

function Header() {
    return (
        <header className="Header">
            <Logo></Logo>
            <div className="Header__menu">
                <Menu></Menu>
                <HeaderButton></HeaderButton>
            </div>
        </header>
    )
}

export default Header