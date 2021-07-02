import './Logo.scss'
import logo from '../../../img/logo.svg'
import logoS from '../../../img/LogoS.svg'

function Logo() {
    return(
        <div className="Header__logo">
            <img className="Header__logo-img" src={logo} alt="logo"/>
        </div>
    )
}

export default Logo