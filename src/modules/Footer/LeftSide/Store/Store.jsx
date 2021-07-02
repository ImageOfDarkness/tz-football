import './Store.scss'
import apleStore from '../../../../img/appstore.png'
import googleStore from '../../../../img/googleplay.png'
import altAppleStore from '../../../../img/appstore-alt.png'
import altGoogleStore from '../../../../img/googleplay-alt.png'

function Store() {

    return (
        <div className="Store">
            <button className="Store__button">
                <img className="button__img" src={apleStore} alt="apleStore"/>
                <img className="button__img-alt" src={altAppleStore} alt="apleStore"/>
            </button>
            <button className="Store__button">
                <img className="button__img" src={googleStore} alt="apleStore"/>
                <img className="button__img-alt" src={altGoogleStore} alt="apleStore"/>
            </button>
        </div>
    )
}

export default Store