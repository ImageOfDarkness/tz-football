import './SocialButton.scss'
import ig from '../../../../img/IG.svg'
import vk from '../../../../img/VK.svg'
import fb from '../../../../img/FB.svg'
import yt from '../../../../img/YT.svg'
import te from '../../../../img/Telegram.svg'
import wa from '../../../../img/WA.svg'


function SocialButton() {
    return(
        <div className="SocialButton">
            <button className="SocialButton__item">
                <img src={ig} alt="ig"/>
            </button><button className="SocialButton__item">
                <img src={vk} alt="vk"/>
            </button><button className="SocialButton__item">
                <img src={fb} alt="fb"/>
            </button><button className="SocialButton__item">
               <img src={yt} alt="yt"/>
            </button><button className="SocialButton__item">
                <img src={te} alt="te"/>
            </button><button className="SocialButton__item">
               <img src={wa} alt="wa"/>
            </button><button className="SocialButton__item">
                <img src={ig} alt="ig"/>
            </button>
        </div>
    )
}

export default SocialButton