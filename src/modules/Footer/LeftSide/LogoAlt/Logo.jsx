import './Logo.scss'
import logo from '../../../../img/Logo-alt.svg'

function LogoAlt() {
    return(
        <div className="LogoAlt">
            <img className="Footer__logo" src={logo} alt="logo"/>
        </div>
    )
}

export default LogoAlt