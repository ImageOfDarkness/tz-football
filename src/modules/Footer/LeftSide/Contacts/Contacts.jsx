import './Contacts.scss'
import phone from '../../../../img/phone.svg'
import mail from '../../../../img/mail.svg'


function Contacts() {
    return (
        <div className="Contacts">
            <span className="Contacts__title">Наши контакты</span>
            <button className="Contacts__button"><img src={phone} alt=""/>+7 (495) 109-03-09</button>
            <button className="Contacts__button"><img src={mail} alt=""/>go@crossball.ru</button>
        </div>
    )
}

export default Contacts