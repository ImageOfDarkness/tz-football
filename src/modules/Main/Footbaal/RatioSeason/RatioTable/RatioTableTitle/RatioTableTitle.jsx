import './RatioTableTitle.scss'

function RatioTableTitle() {
    return (
        <div className="RatioTableTitle">
            <button className="RatioTableTitle-button">Сезон</button>
            <div className="RatioTableTitle-right">
                <button className="RatioTableTitle-button">
                    <span className={"RatioTableTitle-button-text"}>Кол-во игр</span>
                    <span className={"RatioTableTitle-button-text-alt"}>и</span>
                </button>
                <button className="RatioTableTitle-button">
                    <span className={"RatioTableTitle-button-text"}>Гол</span>
                    <span className={"RatioTableTitle-button-text-alt"}>г</span>
                </button>
                <button className="RatioTableTitle-button">
                    <span className={"RatioTableTitle-button-text"}>Пас</span>
                    <span className={"RatioTableTitle-button-text-alt"}>п</span>
                </button>
                <button className="RatioTableTitle-button">
                    <span className={"RatioTableTitle-button-text"}>Гол + пас</span>
                    <span className={"RatioTableTitle-button-text-alt"}>г+п</span>
                </button>
                <button className="RatioTableTitle-button">
                    <span className={"RatioTableTitle-button-text"}>Рейтинг</span>
                    <span className={"RatioTableTitle-button-text-alt"}>р</span>
                </button>
            </div>
        </div>
    )
}

export default RatioTableTitle