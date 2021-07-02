import './Player.scss'
import ratioUp from '../../../img/ratio-up.svg'
import edit from '../../../img/edit.svg'
import fb from '../../../img/FB.svg'
import vk from '../../../img/VK.svg'
import link from '../../../img/link.svg'

function Player(props) {
    const avatat = props.avatar
    const number = props.ratio.number
    const point = props.ratio.point
    const name = props.name
    return (
        <div className="Player">
            <div className="Player-container">
                <div className="Player__avatar-description">
                    <picture className="Player__avatar-wrapper">
                        <img className="Player__avatar" src={avatat} alt=""/>
                    </picture>
                    <div className="Player__description">
                        <div className="ratio">
                            <div className="ratio__number">{number}</div>
                            <div className="ratio__point"><img className="ratio__point-arrow" src={ratioUp} alt="ratioArrow"/>{point}</div>
                        </div>
                        <div className="Player__name">{name}</div>
                    </div>
                </div>
                <button className="Player__button"><img className="Player__button-img" src={edit} alt="edit"/>Редактировать</button>
            </div>
            <div className="share">
                <span className="share__title">Поделиться</span>
                <div className="share__button">
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={fb} alt="fb"/>
                    </button>
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={vk} alt="vk"/>
                    </button>
                    <button className="share__button-item">
                        <img className="share__button-item-img" src={link} alt="link"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Player