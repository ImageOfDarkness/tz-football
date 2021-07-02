import './Footbaal.scss'
import Stat from "./Stat/Stat";
import RatioSeason from "./RatioSeason/RatioSeason";

function Footbaal() {
    return (
        <div className="Footbaal">
            <Stat></Stat>
            <RatioSeason></RatioSeason>
        </div>
    )
}

export default Footbaal