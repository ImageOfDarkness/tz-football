import './SeasonCard.scss'

function SeasonCard(props) {
    return (
        <div className="SeasonCard">
            <div className="SeasonCard__name">{props.name}</div>
            <div className="SeasonCard__number">{props.number}</div>
        </div>
    )
}

export default SeasonCard