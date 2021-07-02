import './Season.scss'
import SeasonCard from "./SeasonCard/SeasonCard";
import fb from "../../../../../img/FB.svg";
import vk from "../../../../../img/VK.svg";
import link from "../../../../../img/link.svg";
import {useSelector} from "react-redux";

function Season() {
  const currentGame = useSelector(state => state.currentGame)

  return (
        <div className="Season">
            <div className="Season__toggle">
                <button className="Season__toggle-button">Все сезоны</button>
                <button className="Season__toggle-button">Сезон 2020/21</button>
            </div>
            <div className="Season__card-wrapper">
                <SeasonCard name={"Игры"} number={currentGame.game}></SeasonCard>
                <SeasonCard name={"Stat"} number={currentGame.ratio}></SeasonCard>
                <SeasonCard name={"Пас"} number={currentGame.pass}></SeasonCard>
                <SeasonCard name={"Гол + пас"} number={currentGame.pass + currentGame.goal}></SeasonCard>
            </div>

        </div>
    )
}

export default Season