import './FooterDown.scss'
import SocialButton from "./SocialButton/SocialButton";


function FooterDown() {
    return(
        <div className="FooterDown">
            <div className="copyright">© Все права защищены</div>
            <SocialButton className="socialButton"></SocialButton>
            <div className="workIn">Cделали в Spans</div>
        </div>
    )
}

export default FooterDown