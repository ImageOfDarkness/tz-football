import './RatioTable.scss'
import RatioTableItem from "./RatioTableItem/RatioTableItem";
import RatioTableTitle from "./RatioTableTitle/RatioTableTitle";
import {useSelector} from "react-redux";
import {useMemo} from "react";

function RatioTable({games}) {
  const sort_type = useSelector(state => state.sort_type)
  const filtredMap = useMemo(()=>{
    switch (sort_type){
      case"gameCount": return(games.sort((a,b)=>(a.game - b.game)));
      case"gamePoint": return(games.sort((a,b)=>(a.goal - b.goal)));
      default: return games
    }
  },[games,sort_type])

  return (
        <div className="RatioTable">
            <RatioTableTitle />
          {filtredMap && filtredMap.map(v=>(
            <RatioTableItem {...v} />
          ))}
        </div>
    )
}

export default RatioTable