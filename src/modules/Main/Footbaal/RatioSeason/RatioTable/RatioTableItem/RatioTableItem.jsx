import './RatioTableItem.scss'

function RatioTableItem({season, game, goal, pass, goalPass, ratio}) {
    return (
        <div className="RatioTableItem">
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