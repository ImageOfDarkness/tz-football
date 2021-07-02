import './SideMenu.scss'
import Player from "../../../Main/Player/Player";
import avatar from '../../../../img/Avatar.png'
import MenuList from "../../../Main/MenuList/MenuList";

function SideMenu() {
    return (
        <div className="SideMenu">
            <Player avatar={avatar} ratio={{number: 89.40, point: 999}} name={"Елишакашвили Михо"}></Player>
            <MenuList></MenuList>
        </div>
    )
}

export default SideMenu