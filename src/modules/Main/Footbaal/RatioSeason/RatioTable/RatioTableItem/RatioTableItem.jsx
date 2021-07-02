import './RatioTableItem.scss'
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../../../../../store/action";

function RatioTableItem({season, game, goal, pass, goalPass, ratio}) {
  const dispatch = useDispatch()
  const setGame = () =>{
    dispatch(setCurrentGame({
      game,
      goal,
      pass,
      goalPass,
      ratio,
    }))
  }
  return (
        <div onClick={setGame} className="RatioTableItem">
            <div className="RatioTableItem__season">Сезон {season}/{season - 1}</div>
            <div className="RatioTableItem__wrapper">
                <div className="RatioTableItem__wrapper-item">{game}</div>
                <div className="RatioTableItem__wrapper-item">{goal}</div>
                <div className="RatioTableItem__wrapper-item">{pass}</div>
                <div className="RatioTableItem__wrapper-item">{goalPass}</div>
                <div className="RatioTableItem__wrapper-item">{ratio}</div>
            </div>
        </div>
    )
}

export default RatioTableItem