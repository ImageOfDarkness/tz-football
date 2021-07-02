import './MenuList.scss'
import user from '../../../img/user.svg'
import arrow from '../../../img/arrowUp.svg'
import calendar from '../../../img/calendar.svg'
import report from '../../../img/report.svg'
import history from '../../../img/history.svg'
import logOut from '../../../img/logOut.svg'
import MenuListItem from "./MEnuListItem/MenuListItem";



function MenuList() {

    return (
        <div className="MenuList">
            <MenuListItem name="Статистика" user={user} arrow={arrow} nested={["Футбол", "Баскетбол", "Волейбол"]}></MenuListItem>
            <MenuListItem name="Ближайшие игры" user={calendar} arrow={arrow}  nested={["Футбол", "Баскетбол", "Волейбол"]}></MenuListItem>
            <MenuListItem name="Игровые отчёты" user={report} arrow={arrow}  nested={["Футбол", "Баскетбол", "Волейбол"]}></MenuListItem>
            <MenuListItem name="История заказов" user={history} arrow={arrow}  nested={["Футбол", "Баскетбол", "Волейбол"]}></MenuListItem>
            <MenuListItem name="Выйти" user={logOut}></MenuListItem>
        </div>
    )
}

export default MenuList