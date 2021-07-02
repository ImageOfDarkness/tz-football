import './Footer.scss'
import LeftSide from "./LeftSide/LeftSide";
import FooterMenu from "./FooterMenu/FooterMenu";
import FooterDown from "./FooterDown/FooterDown";
import Contacts from "./LeftSide/Contacts/Contacts";
import SocialButton from "./FooterDown/SocialButton/SocialButton";
import Store from "./LeftSide/Store/Store";
import LogoAlt from "./LeftSide/LogoAlt/Logo";

function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer--normal">
                <div className="Footer__content">
                    <LeftSide></LeftSide>
                    <FooterMenu></FooterMenu>
                </div>
                <FooterDown></FooterDown>
            </div>
            <div className="Footer--alt">
                <Contacts></Contacts>
                <SocialButton></SocialButton>
                <Store></Store>
                <LogoAlt></LogoAlt>
                <FooterDown></FooterDown>
            </div>

        </footer>

    )
}

export default Footer