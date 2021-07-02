import './RatioSeason.scss'
import RatioTable from "./RatioTable/RatioTable";

function RatioSeason() {
  const games = [
    {season:2020, game:2, goal:2, pass:11, goalPass:0, ratio:89.40},
    {season:2021, game:3, goal:9, pass:12, goalPass:6, ratio:82.40},
    {season:2018, game:2, goal:5, pass:81, goalPass:1, ratio:85.40},
    {season:2019, game:5, goal:3, pass:11, goalPass:2, ratio:81.40},
    {season:2021, game:2, goal:2, pass:51, goalPass:3, ratio:80.40},
  ]
    return (
        <div className="RatioSeason">
            <button className="" />
            <RatioTable games={games}/>
        </div>
    )
}

export default RatioSeason