import './Menu.scss'

function Menu() {
    return(
        <menu className="Menu">
            <button className="Menu__button">Расписание</button>
            <button className="Menu__button">Игровые отчёты</button>
            <button className="Menu__button">Статистика</button>
            <button className="Menu__button Menu__button-alt">Ещё</button>
        </menu>
    )
}

export default Menu