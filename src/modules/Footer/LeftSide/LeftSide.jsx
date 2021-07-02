import './LeftSide.scss'
import LogoAlt from "./LogoAlt/Logo";
import Store from "./Store/Store";
import Contacts from "./Contacts/Contacts";


function LeftSide() {
    return (
        <div className="LeftSide">
            <LogoAlt></LogoAlt>
            <Store></Store>
            <Contacts></Contacts>
        </div>
    )
}

export default LeftSide