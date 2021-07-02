import './Logo.scss'
import logo from '../../../img/logo.svg'
import logoS from '../../../img/LogoS.svg'

function Logo() {
    return(
        <div>
            <img className="Header__logo" src={logo} alt="logo"/>
        </div>
    )
}

export default Logo