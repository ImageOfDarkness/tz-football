import './Season.scss'
import SeasonCard from "./SeasonCard/SeasonCard";
import fb from "../../../../../img/FB.svg";
import vk from "../../../../../img/VK.svg";
import link from "../../../../../img/link.svg";

function Season() {
    return (
        <div className="Season">
            <div className="Season__toggle">
                <button className="Season__toggle-button">Все сезоны</button>
                <button className="Season__toggle-button">Сезон 2020/21</button>
            </div>
            <div className="Season__card-wrapper">
                <SeasonCard name={"Игры"} number={36}></SeasonCard>
                <SeasonCard name={"Stat"} number={67}></SeasonCard>
                <SeasonCard name={"Пас"} number={136}></SeasonCard>
                <SeasonCard name={"Гол + пас"} number={136}></SeasonCard>
            </div>

        </div>
    )
}

export default Season