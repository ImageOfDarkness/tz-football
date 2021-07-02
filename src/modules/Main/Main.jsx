import './Main.scss'
import SideMenu from "../Header/Menu/SideMenu/SideMenu";
import Footbaal from "./Footbaal/Footbaal";

function Main() {
    return (
        <div className="Main">
            <SideMenu></SideMenu>
            <Footbaal></Footbaal>
        </div>
    )
}

export default Main