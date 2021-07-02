import './RatioTable.scss'
import RatioTableItem from "./RatioTableItem/RatioTableItem";
import RatioTableTitle from "./RatioTableTitle/RatioTableTitle";

function RatioTable() {
    return (
        <div className="RatioTable">
            <RatioTableTitle></RatioTableTitle>
            <RatioTableItem season={2021} game={4} goal={3} pass={2} goalPass={1} ratio={49.40}></RatioTableItem>
            <RatioTableItem season={2020} game={3} goal={2} pass={1} goalPass={0} ratio={89.40}></RatioTableItem>
            <RatioTableItem season={2019} game={2} goal={1} pass={0} goalPass={5} ratio={79.40}></RatioTableItem>
            <RatioTableItem season={2018} game={1} goal={0} pass={5} goalPass={4} ratio={69.40}></RatioTableItem>
            <RatioTableItem season={2017} game={0} goal={5} pass={4} goalPass={3} ratio={59.40}></RatioTableItem>
        </div>
    )
}

export default RatioTable