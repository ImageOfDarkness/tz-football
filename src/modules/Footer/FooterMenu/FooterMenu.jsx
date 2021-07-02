import './FooterMenu.scss'
import MenuTable from "./MenuTable/MenuTable";

function FooterMenu() {
    return (
        <div className="FooterMenu">
            <div className="FooterMenu__groop">
                <MenuTable title={"Разделы"} item={["Главная", "Расписание", "Игровые отчёты", "Статистика"]}></MenuTable>
                <MenuTable title={"Виды спорта"} item={["Футбол", "Баскетбол", "Волейбол"]}></MenuTable>

            </div>
            <div className="FooterMenu__groop">
                <MenuTable title={"Полезное"} item={["Как записаться?", "Ответы на вопросы", "Достижения"]}></MenuTable>
                <MenuTable title={"Чё почём"} item={["Абонементы", "Корп. клиентам", "Партнёры"]}></MenuTable>
            </div>
            {/*<div className="FooterMenu__table">*/}
            {/*    <span className="table__title">Разделы</span>*/}
            {/*    <span className="tabele__item">Главная</span>*/}
            {/*    <span className="tabele__item">Расписание</span>*/}
            {/*    <span className="tabele__item">Игровые отчёты</span>*/}
            {/*    <span className="tabele__item">Статистика</span>*/}
            {/*</div>*/}
            {/*<div className="FooterMenu__table">*/}
            {/*    <span className="table__title">Виды спорта</span>*/}
            {/*    <span className="tabele__item">Футбол</span>*/}
            {/*    <span className="tabele__item">Баскетбол</span>*/}
            {/*    <span className="tabele__item">Волейбол</span>*/}
            {/*</div>*/}
            {/*<div className="FooterMenu__table">*/}
            {/*    <span className="table__title">Полезное</span>*/}
            {/*    <span className="tabele__item">Как записаться?</span>*/}
            {/*    <span className="tabele__item">Ответы на вопросы</span>*/}
            {/*    <span className="tabele__item">Достижения</span>*/}
            {/*</div>*/}
            {/*<div className="FooterMenu__table">*/}
            {/*    <span className="table__title"></span>*/}
            {/*    <span className="tabele__item"></span>*/}
            {/*    <span className="tabele__item"></span>*/}
            {/*    <span className="tabele__item"></span>*/}
            {/*</div>*/}
        </div>
    )
}

export default FooterMenu