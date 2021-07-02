import './HeaderButton.scss'
import football from '../../../img/football.svg'
import arrow from '../../../img/Vector.svg'
import avatar from '../../../img/Ava.png'
import bag from '../../../img/bag.svg'
import Burger from "./Burger/Burger";

function HeaderButton() {
    return(
        <div className="HeaderButton">
            <button className="dropdown" onClick={() =>console.log("dropdown")}>
                <img className="dropdown__football" src={football} alt="footbol.svg"/>
                <img className="dropdown__arrow" src={arrow} alt="arrow.svg"/>
            </button>
            <button className="avatar" onClick={() =>console.log("avatar")}>
                <img src={avatar} alt="avatar.png"/>
            </button>
            <button className="bag" onClick={() =>console.log("bag")}>
                <img src={bag} alt="bag"/>
            </button>
            <Burger menu={["Расписание", "Игровые отчёты", "Статистика", "Ещё"]}></Burger>

        </div>
    )
}

export default HeaderButton