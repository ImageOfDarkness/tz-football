import './Burger.scss'
import burger from '../../../../img/burger.svg'
import {useState} from "react";

function Burger({menu}) {
    const [open, setOpen] = useState(false)
    function openMenu(e) {
        setOpen(!open)
    }

    return (
        <div className="Burger">
            <button onClick={openMenu} className="Burger__button"><img src={burger} alt="burger"/></button>
            <div className={["Burger__menu", open && "open"].join(" ")}>
                {menu && menu.map(v=>(
                    <button className="Burger__menu-item">{v}</button>
                ))}
                <button onClick={openMenu} className={"Burger__menu-exit"}><img src={burger} alt=""/></button>
            </div>
        </div>
    )
}

export default Burger