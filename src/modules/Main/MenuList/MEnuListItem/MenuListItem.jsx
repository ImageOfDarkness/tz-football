import './MenuListItem.scss'
import {useState} from "react";

function MenuListItem({nested, arrow, user, name}) {
    const [open, setOpen] = useState(false)
    function seeMore(e) {
        setOpen(!open)
    }


    return (
        <div className="MenuListItem">
            <button onClick={seeMore} className="MenuList__button"><img className="MenuList__button-img" src={user} alt="calendar"/>{arrow && <img className={["MenuList__button-img-arrow",open && "open"].join(" ")} src={arrow} alt="calendar"/>}{name}</button>
            <div className={["nested",open && "open"].join(" ")}>
                {nested && nested.map((item, index)=>(
                    <button key={index} className="MenuList__button MenuList__button-nested">{item}</button>
                ))}
            </div>
        </div>
    )
}

export default MenuListItem