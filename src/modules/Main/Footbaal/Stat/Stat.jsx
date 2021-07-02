import './Stat.scss'
import Icons from "./Icons/Icons";
import Season from "./Season/Season";
import fb from "../../../../img/FB.svg";
import vk from "../../../../img/VK.svg";
import link from "../../../../img/link.svg";

function Stat() {
    return (
        <div className="Stat">
            <Icons></Icons>
            <Season></Season>
            <div className="share">
                <span className="share__title">Поделиться</span>
                <div className="share__button">
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={fb} alt="fb"/>
                    </button>
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={vk} alt="vk"/>
                    </button>
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={link} alt="link"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Stat