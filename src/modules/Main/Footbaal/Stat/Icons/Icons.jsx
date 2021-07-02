import './Icons.scss'
import icons from '../../../../../img/icons.png'
import iconsDark from '../../../../../img/icons-dark.png'

function Icons() {
    return (
        <div className="Icons">
            <div className="Icons__title">Награды и достижения</div>
            <div className="Icons__top">
                <div className="Icons__top__number-wrapper">
                    <div className="Icons__top__number-item"><img src={icons} alt="icons"/><div className="Icons__top__number-item-point">5</div></div>
                    <div className="Icons__top__number-item"><img src={icons} alt="icons"/><div className="Icons__top__number-item-point">5</div></div>
                    <div className="Icons__top__number-item"><img src={icons} alt="icons"/><div className="Icons__top__number-item-point">99</div></div>
                </div>
                <div className="Icons__top__dark-wrapper">
                    <div className="Icons__top__number-item"><img src={iconsDark} alt="iconsDark"/></div>
                    <div className="Icons__top__number-item"><img src={iconsDark} alt="iconsDark"/></div>
                </div>
            </div>
            <div className="Icons__down">
                <div className="Icons__top__number-item"><img src={icons} alt="icons"/></div>
                <div className="Icons__top__number-item"><img src={icons} alt="icons"/></div>
                <div className="Icons__top__number-item"><img src={icons} alt="icons"/></div>
                <div className="Icons__top__number-item"><img src={icons} alt="icons"/></div>
                <div className="Icons__top__number-item"><img src={icons} alt="icons"/></div>

            </div>
        </div>
    )
}

export default Icons